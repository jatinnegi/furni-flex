"use client";
import { FC } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "@/lib/features/cart/cartSlice";
import Link from "next/link";
import Image from "next/image";
import Ratings from "@/components/Ratings";
import { CollectionItemAddToCartAction } from "./CollectionItemActions";

interface Props {
  product: CollectionItemProps;
}

const CollectionItem: FC<Props> = ({ product }) => {
  const { productId, productName, productHref, productImgHref, productPrice } =
    product;

  const dispatch = useDispatch();

  return (
    <article
      key={productId}
      itemScope
      itemType="https://schema.org/Product"
      className="rounded-lg overflow-hidden py-5 px-4 border-[1px] border-solid border-gray-100 shadow-md"
    >
      <Link href={productHref}>
        <div className="relative w-full aspect-square rounded-lg overflow-hidden">
          <Image
            src={productImgHref}
            alt={productName}
            fill
            style={{
              objectFit: "contain",
            }}
            loading="lazy"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            itemProp="image"
          />
        </div>
        <h3 itemProp="name" className="font-normal text-lg mt-2">
          {productName}
        </h3>
        <Ratings rating={3.5} totalRatings={821} />
        <p className="hidden md:block text-sm mt-1 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, odit
          distinctio atque incidunt maiores iure!
        </p>
        <div className="mt-2 mb-4 flex gap-2 font-light">
          <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
            <span itemProp="price" content={productPrice.toString()}>
              ${productPrice.toLocaleString("en-US")}
            </span>
            <meta itemProp="priceCurrency" content="USD" />
            <meta
              itemProp="availability"
              content="https://schema.org/InStock"
            />
          </span>
        </div>
        <CollectionItemAddToCartAction
          handleClick={(
            e: React.MouseEvent<HTMLButtonElement | MouseEvent>
          ) => {
            e.preventDefault();
            dispatch(
              addItem({
                productId,
                productName,
                productImgHref,
                productPrice,
                quantity: 1,
              })
            );
          }}
        />
      </Link>
    </article>
  );
};

export default CollectionItem;
