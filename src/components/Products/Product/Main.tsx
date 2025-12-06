"use client";
import Image from "next/image";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedImg,
  setPrevImage,
  setNextImage,
} from "@/lib/features/product/productSlice";

import ImageSlider from "./ImageSlider";
import Summary from "./Summary";

const Main = () => {
  const { current: product, selectedImgId } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();

  const selectedImage = product.images.filter(
    (image: ProductImageProps) => image.id === selectedImgId
  )[0].href;

  return (
    <div className="flex gap-4">
      <div className="w-[60%] flex gap-4 items-start">
        <ImageSlider
          productName={product.name}
          images={product.images}
          selectedImgId={selectedImgId}
          selectPrevImage={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            dispatch(setPrevImage());
          }}
          selectNextImage={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            dispatch(setNextImage());
          }}
          updateSelectedImg={(productImageId: number) => {
            dispatch(setSelectedImg({ productImageId }));
          }}
        />
        <div className="flex-1 aspect-square relative">
          <Image
            src={selectedImage}
            alt={product.name}
            layout="fill"
            objectFit="contain"
            loading="lazy"
          />
        </div>
      </div>
      <Summary />
    </div>
  );
};

export default Main;
