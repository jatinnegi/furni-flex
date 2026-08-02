"use client";
import Image from "next/image";
import MainDisplay from "./MainDisplay";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

const images = [
  "/image/products/helm-sofa/360/helm-sofa-360-deg-1.webp",
  "/image/products/helm-sofa/img-1.jpg",
  "/image/products/helm-sofa/img-2.jpg",
  "/image/products/helm-sofa/img-3.jpg",
  "/image/products/helm-sofa/img-4.jpg",
  "/image/products/helm-sofa/img-5.jpg",
  "/image/products/helm-sofa/img-6.jpg",
  "/image/products/helm-sofa/img-7.jpg",
  "/image/products/helm-sofa/img-8.jpg",
  "/image/products/helm-sofa/img-9.jpg",
  "/image/products/helm-sofa/img-10.jpg",
  "/image/products/helm-sofa/img-11.jpg",
  "/image/products/helm-sofa/img-12.jpg",
  "/image/products/helm-sofa/img-13.jpg",
];

const ImagePreview = () => {
  return (
    <div className="flex flex-col items-start lg:flex-row-reverse w-full md:w-1/2 lg:w-3/5 gap-2 md:sticky md:top-[135px] md:left-0">
      <MainDisplay />
      <div className="w-full lg:w-28">
        <Swiper
          modules={[Mousewheel, FreeMode]}
          direction="horizontal"
          spaceBetween={8}
          slidesPerView={4}
          freeMode={true}
          mousewheel={true}
          breakpoints={{
            1024: {
              direction: "vertical",
              slidesPerView: 4,
              spaceBetween: 4,
            },
          }}
          className="w-full h-auto lg:h-[580px] overflow-hidden"
        >
          {images.map((src, index) => (
            <SwiperSlide
              key={index}
              className="relative aspect-square w-full !shrink-0 lg:!shrink-1"
            >
              <Image
                src={src}
                alt={`helm-sofa-${index + 1}`}
                layout="fill"
                objectFit="contain"
                loading="lazy"
                className={
                  index === 0
                    ? "border border-gray-500"
                    : "border border-gray-100"
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ImagePreview;
