"use client";
import { useEffect, useRef, useState } from "react";
import VerifiedIcon from "@/components/Icons/Verified";
import Image from "next/image";
import SlidingCarousel from "../SlidingCarousel";
import { SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import SlidingArrows from "@/components/SlidingCarousel/SlidingArrows";

const CONTENT_MAX_WIDTH = 1450;
const CONTENT_WIDTH_RATIO = 11 / 12;

/** Drop leftover end snaps that only reveal empty space, not another card. */
function alignEndSnaps(swiper: SwiperType) {
  const snapGrid = swiper.snapGrid;
  if (snapGrid.length === 0) return;

  const maxSnap = -swiper.maxTranslate();
  snapGrid[snapGrid.length - 1] = maxSnap;

  const lastSize =
    swiper.slidesSizesGrid[swiper.slidesSizesGrid.length - 1] ?? 0;
  if (lastSize <= 0) return;

  swiper.snapGrid = snapGrid.filter((snap, index, arr) => {
    if (index === 0 || index === arr.length - 1) return true;
    return maxSnap - snap >= lastSize * 0.85;
  });
}

function usePageContentInset() {
  const [inset, setInset] = useState(0);

  useEffect(() => {
    const update = () => {
      const viewportWidth = window.innerWidth;
      const contentWidth = Math.min(
        viewportWidth * CONTENT_WIDTH_RATIO,
        CONTENT_MAX_WIDTH,
      );
      setInset((viewportWidth - contentWidth) / 2);
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return inset;
}

const CustomerReviews = () => {
  const contentInset = usePageContentInset();
  const swiperRef = useRef<SwiperType | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = (swiper: SwiperType) => {
    setAtStart((prev) =>
      prev === swiper.isBeginning ? prev : swiper.isBeginning,
    );
    setAtEnd((prev) => (prev === swiper.isEnd ? prev : swiper.isEnd));
  };

  const prepareSwiper = (swiper: SwiperType) => {
    alignEndSnaps(swiper);
    syncEdges(swiper);
  };

  return (
    <div className="bg-[#F6F2EE] py-16 my-20 overflow-hidden">
      <div className="flex justify-between w-11/12 max-w-[1450px] mx-auto">
        <h3 className="text-3xl font-light">What is everyone saying?</h3>
        <SlidingArrows
          slide={0}
          total={0}
          next={() => swiperRef.current?.slideNext()}
          prev={() => swiperRef.current?.slidePrev()}
          disablePrev={atStart}
          disableNext={atEnd}
          dark
          className="gap-0"
        />
      </div>
      <div className="mt-6 w-full">
        <SlidingCarousel
          slidesPerView="auto"
          slidesPerGroup={1}
          spaceBetween={24}
          slidesOffsetBefore={contentInset}
          slidesOffsetAfter={contentInset}
          loop={false}
          navigation={false}
          grabCursor={false}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            prepareSwiper(swiper);
          }}
          onProgress={syncEdges}
          onUpdate={prepareSwiper}
          onResize={prepareSwiper}
        >
          {[0, 1, 2, 4, 5, 6, 7].map((num: number) => (
            <SwiperSlide key={num} className="!w-[min(32rem,calc(100vw-5rem))]">
              <section
                key={num}
                className="bg-white p-7 flex gap-6 border-[1px] border-solid border-gray-100/50 shadow-xs rounded-xs w-full"
              >
                <article className="flex-1 flex flex-col gap-0.5">
                  <h3 className="font-[350] text-lg">Jerome Bell</h3>
                  <div className="flex items-center gap-1.5">
                    <div className="h-4 w-4">
                      <VerifiedIcon />
                    </div>
                    <p className="text-sm font-[350] text-[var(--color-primary)]">
                      Verified Buyer
                    </p>
                  </div>
                  <p className="mt-3 font-light text-sm leading-6">
                    Really fast response time from these guys. No mess, no fuss,
                    knowledgeable, polite and quick. 100% for customer service.
                  </p>
                </article>
                <div className="relative w-2/5 aspect-square">
                  <Image
                    src={`/image/featured-blogs/blog-${(num % 4) + 1}.webp`}
                    alt={`featured-blog-${(num % 4) + 1}`}
                    layout="fill"
                    objectFit="cover"
                    loading="lazy"
                  />
                </div>
              </section>
            </SwiperSlide>
          ))}
        </SlidingCarousel>
      </div>
    </div>
  );
};

export default CustomerReviews;
