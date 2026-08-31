"use client";
import { FC, PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { Navigation } from "swiper/modules";
import clsx from "clsx";
import "swiper/css";
import "swiper/css/navigation";

interface Props extends PropsWithChildren {
  slidesPerView?: number | "auto";
  slidesPerGroup?: number;
  spaceBetween?: number;
  slidesOffsetBefore?: number;
  slidesOffsetAfter?: number;
  loop?: boolean;
  navigation?: boolean;
  grabCursor?: boolean;
  onSwiper?: (swiper: SwiperType) => void;
  onProgress?: (swiper: SwiperType) => void;
  onUpdate?: (swiper: SwiperType) => void;
  onResize?: (swiper: SwiperType) => void;
  className?: string;
}

const SlidingCarousel: FC<Props> = ({
  slidesPerView = 4,
  slidesPerGroup = 4,
  spaceBetween = 0,
  slidesOffsetBefore = 0,
  slidesOffsetAfter = 0,
  loop = true,
  navigation = true,
  grabCursor = true,
  className = "",
  onSwiper,
  onProgress,
  onUpdate,
  onResize,
  children,
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      spaceBetween={spaceBetween}
      slidesOffsetBefore={slidesOffsetBefore}
      slidesOffsetAfter={slidesOffsetAfter}
      loop={loop}
      navigation={navigation}
      grabCursor={grabCursor}
      onSwiper={onSwiper}
      onProgress={onProgress}
      onUpdate={onUpdate}
      onResize={onResize}
      className={clsx("pb-8", className)}
    >
      {children}
    </Swiper>
  );
};

export default SlidingCarousel;
