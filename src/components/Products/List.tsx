"use client";
import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import clsx from "clsx";

import { SwiperSlide } from "swiper/react";
import SlidingCarousel from "../SlidingCarousel";

interface Props {
  title: string;
  className?: string;
  largeTitle?: boolean;
  expanded?: boolean;
}

const ProductsList: FC<Props> = ({
  title,
  className,
  largeTitle,
  expanded,
}) => {
  const products = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className={clsx("mt-12", className || "")}>
      <Header title={title} largeTitle={largeTitle} />
      <div
        className={clsx(
          "relative w-11/12 mt-6 max-w-7xl mx-auto",
          expanded === true ? "max-w-[1450px]" : "max-w-7xl"
        )}
      >
        <SlidingCarousel>
          {products.map((num: number) => (
            <SwiperSlide key={num}>
              <Link
                href={`/products/home-centre-3-Seater-helios-emily-fabric-sofa-${num}`}
                className="block w-full px-4"
              >
                <div className="relative w-full aspect-square">
                  <Image
                    src="/image/products/helm-sofa/product-card.webp"
                    alt="helm-sofa"
                    fill
                    style={{ objectFit: "contain" }}
                    loading="lazy"
                  />
                </div>
                <article className="mt-1">
                  <h4 className="text-base font-[350] text-gray-600">
                    Home Centre 3 Seater Helios Emily Fabric Sofa | Fabric Sofa
                    | (Rich Brown) | 1 Year Warranty ({num})
                  </h4>
                  <p className="text-base mt-1 font-[350]">$3,999</p>
                </article>
              </Link>
            </SwiperSlide>
          ))}
        </SlidingCarousel>
      </div>
    </div>
  );
};

export default ProductsList;
