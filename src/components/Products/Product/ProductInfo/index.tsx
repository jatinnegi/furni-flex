"use client";
import { useState } from "react";
import { clsx } from "clsx";
import Image from "next/image";

interface DisplayProps {
  details: boolean;
  dimensions: boolean;
  shippingReturns: boolean;
}

type DimensionProps = [label: string, value: string];

const dimensions: DimensionProps[] = [
  ["Overall", '33.75"D x 88.5"W x 30.6"H'],
  ["Weight", "42 Kgs"],
  ["Seat Depth", '21"'],
  ["Floor to Top of Cushion", '19"'],
  ["Seat Cushion Width", '25"'],
  ["Thickness of Back Pillow", '8"'],
  ["Arm Width", '4.5"'],
];

const ProductInfo = () => {
  const [displayData, setDisplayData] = useState<DisplayProps>({
    details: false,
    dimensions: false,
    shippingReturns: false,
  });

  return (
    <div>
      <article className="border-b-[1px] border-solid border-gray-200 py-3 w-full flex flex-col gap-4">
        <button
          type="button"
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={() => {
            setDisplayData({ ...displayData, details: !displayData.details });
          }}
        >
          <p>Details</p>
          {displayData?.details ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
        <ul
          className={clsx(
            displayData.details ? "block" : "hidden",
            "font-light flex flex-col gap-2 text-sm"
          )}
        >
          <li>
            <span>Frame Material:</span>
          </li>
          <li>
            <span>Filling:</span>
          </li>
          <li>
            <span>Upholstery Material:</span>
          </li>
          <li>
            <span>Back Design:</span>
          </li>
          <li>
            <span>Max Bearing Weight:</span>
          </li>
        </ul>
      </article>
      <article className="border-b-[1px] border-solid border-gray-200 py-3 w-full flex flex-col gap-4">
        <button
          type="button"
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={() => {
            setDisplayData({
              ...displayData,
              dimensions: !displayData.dimensions,
            });
          }}
        >
          <p>Dimensions</p>
          {displayData?.dimensions ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
        <main
          className={clsx(
            displayData.dimensions ? "flex" : "hidden",
            "flex-col gap-2 w-full"
          )}
        >
          <div className="relative w-full" style={{ aspectRatio: "1.5/1" }}>
            <Image
              src="/image/products/helm-sofa/dimensions.webp"
              alt="helm-sofa"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
          <ul className="font-light flex flex-col text-sm">
            {dimensions.map((item: DimensionProps, idx: number) => (
              <li
                key={item[0]}
                className={clsx(
                  idx % 2 ? "bg-white" : "bg-gray-100",
                  "w-full p-2 flex justify-between"
                )}
              >
                <span>{item[0]}</span>
                <span>{item[1]}</span>
              </li>
            ))}
          </ul>
        </main>
      </article>
      <article className="border-b-[1px] border-solid border-gray-200 py-3 w-full flex flex-col gap-4">
        <button
          type="button"
          className="flex justify-between items-center w-full cursor-pointer"
          onClick={() => {
            setDisplayData({
              ...displayData,
              shippingReturns: !displayData.shippingReturns,
            });
          }}
        >
          <p>Shipping & Returns</p>
          {displayData?.shippingReturns ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-4 w-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          )}
        </button>
        <ul
          className={clsx(
            displayData.shippingReturns ? "block" : "hidden",
            "font-light flex flex-col gap-4 text-sm"
          )}
        >
          <li className="flex gap-4">
            <svg
              className="mt-0.5 h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
            >
              <path
                fill="#141414"
                d="M15.395 2.5a3.75 3.75 0 0 0-2.786 0L3.732 6.05a2.75 2.75 0 0 0-1.728 2.553v10.792a2.75 2.75 0 0 0 1.728 2.554l8.877 3.55a3.75 3.75 0 0 0 2.786 0l8.877-3.55a2.75 2.75 0 0 0 1.729-2.554V8.604a2.75 2.75 0 0 0-1.729-2.553zm-2.229 1.392a2.25 2.25 0 0 1 1.672 0L23.23 7.25l-3.605 1.442L10.397 5zM8.378 5.808l9.23 3.692l-3.606 1.443L4.773 7.25zm-4.851 2.56l9.725 3.89V24.14l-.086-.032l-8.876-3.551a1.25 1.25 0 0 1-.786-1.16V8.603q0-.12.023-.237M14.752 24.14V12.258l9.726-3.89q.022.115.022.236v10.792c0 .511-.31.971-.785 1.16l-8.877 3.552z"
              ></path>
            </svg>
            <div className="flex-1 flex flex-col gap-1">
              <p className="font-normal text-sm">Shipping & Delivery</p>
              <p>
                Enjoy free shipping on all orders. Items ship immediately upon
                availablity, with delivery in 3-5 business days
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 18.75a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 0 1-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 0 0-3.213-9.193 2.056 2.056 0 0 0-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 0 0-10.026 0 1.106 1.106 0 0 0-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
              />
            </svg>
            <div className="flex-1 flex flex-col gap-1">
              <p className="font-normal text-sm">60-Day Easy Returns</p>
              <p>
                Not satisifed? Return eligible items in new, unused condition
                within 60 days for a full refund or exchange.
              </p>
            </div>
          </li>
        </ul>
      </article>
    </div>
  );
};

export default ProductInfo;
