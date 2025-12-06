"use client";
import { FC, PropsWithChildren } from "react";
import { Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

interface Props extends PropsWithChildren {
  slidesPerView?: number;
  slidesPerGroup?: number;
  loop?: boolean;
  navigation?: boolean;
  grabCursor?: boolean;
}

const SlidingCarousel: FC<Props> = ({
  slidesPerView = 4,
  slidesPerGroup = 4,
  loop = true,
  navigation = true,
  grabCursor = true,
  children,
}) => {
  return (
    <Swiper
      modules={[Navigation]}
      slidesPerView={slidesPerView}
      slidesPerGroup={slidesPerGroup}
      loop={loop}
      navigation={navigation}
      grabCursor={grabCursor}
      className="pb-8"
    >
      {children}
    </Swiper>
  );
};

export default SlidingCarousel;
