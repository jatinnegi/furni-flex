"use client";
import VerifiedIcon from "@/components/Icons/Verified";
import Image from "next/image";
import SlidingCarousel from "../SlidingCarousel";
import { SwiperSlide } from "swiper/react";
import SlidingArrows from "@/components/SlidingCarousel/SlidingArrows";

const CustomerReviews = () => {
  return (
    <div className="bg-[#F6F2EE] py-16 my-20">
      <div className="flex justify-between">
        <h3 className="w-11/12 max-w-[1450px] mx-auto text-3xl font-light">
          What is everyone saying?
        </h3>
        {/* <SlidingArrows slide={1} total={7} next={() => {}} prev={() => {}} /> */}
      </div>
      <div className="mt-6 w-11/12 max-w-[1450px] mx-auto">
        <SlidingCarousel
          slidesPerView={2.5}
          slidesPerGroup={1}
          loop={false}
          navigation={false}
          grabCursor={false}
        >
          {[0, 1, 2, 4, 5, 6, 7].map((num: number) => (
            <SwiperSlide key={num}>
              <section
                key={num}
                className="mr-4 bg-white p-7 flex gap-6 border-[1px] border-solid border-gray-100/50 shadow-xs rounded-xs"
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
