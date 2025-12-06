"use client";
import { useRef, useState, FC } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Link from "@/components/Buttons/Link";
import { Heading1, Heading4 } from "@/components/Typography/Headings";
import SlidingArrows from "@/components/SlidingCarousel/SlidingArrows";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface PromoSlideProps {
  id: number;
  href: string;
  mobileHref: string;
  altText: string;
}

const promoSlides: PromoSlideProps[] = [
  {
    id: 1,
    href: "/image/promo/promo-slider-1.webp",
    mobileHref: "/image/promo/promo-slider-mobile-1.webp",
    altText: "promo-slide-1",
  },
  {
    id: 2,
    href: "/image/promo/promo-slider-2.webp",
    mobileHref: "/image/promo/promo-slider-mobile-2.webp",
    altText: "promo-slide-2",
  },
];

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
};

const PromoSlider = () => {
  const sliderRef = useRef<Slider>(null);
  const [current, setCurrent] = useState<number>(0);

  const next = () => sliderRef.current?.slickNext();
  const prev = () => sliderRef.current?.slickPrev();

  return (
    <div className="relative">
      <Slider
        ref={sliderRef}
        {...settings}
        afterChange={(index: number) => {
          setCurrent(index);
        }}
      >
        {promoSlides.map((promoSlide: PromoSlideProps) => (
          <div
            key={promoSlide.id}
            className="aspect-[1.8/1] md:aspect-[2.13/1] w-full"
          >
            <div className="w-full h-full relative flex items-end justify-center">
              <Image
                src={promoSlide.href}
                alt={promoSlide.altText}
                layout="fill"
                objectFit="cover"
                className="hidden md:block absolute top-0 left-0 w-full h-full z-[2]"
              />
              <Image
                src={promoSlide.mobileHref}
                alt={promoSlide.altText}
                layout="fill"
                objectFit="cover"
                className="block md:hidden absolute top-0 left-0 w-full h-full z-[2]"
              />
              <div className="absolute z-[3] text-white text-center bottom-1/6 flex flex-col items-center justify-center gap-2.5 md:gap-6">
                <Heading4>SAVE UPTO 30%</Heading4>
                <Heading1>Modern Living</Heading1>
                <Heading4>New Sofas and chairs collection.</Heading4>
                <Link href="/collections/sofas">EXPLORE NOW</Link>
              </div>
              <div className="absolute top-0 left-0 w-full h-full bg-black/30 md:bg-black/10 z-[2]" />
            </div>
          </div>
        ))}
      </Slider>
      <SlidingArrows
        slide={current + 1}
        total={promoSlides.length}
        next={next}
        prev={prev}
        className="hidden absolute bottom-1/12 right-[5%] z-[3]"
      />
    </div>
  );
};

export default PromoSlider;
