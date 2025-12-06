"use client";
import { FC } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
}

const Quantity: FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx(
        "flex h-7 border-[1px] border-solid border-gray-300 rounded-xs",
        className
      )}
    >
      <button
        type="button"
        className="bg-none border-none outline-none cursor-pointer h-full aspect-square flex items-center justify-center"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
        </svg>
      </button>
      <input
        type="text"
        className="bg-none outline-none h-full w-10 text-center text-xs border-l-[1px] border-r-[1px] border-solid border-gray-300"
        value={1}
        onChange={() => {}}
      />
      <button
        type="button"
        className="bg-none border-none outline-none cursor-pointer h-full aspect-square flex items-center justify-center"
        onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
          e.preventDefault();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-3 w-3"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
      </button>
    </div>
  );
};

export default Quantity;
