"use client";
import { useEffect, useState } from "react";
import clsx from "clsx";

type SortValueType =
  | "Sort"
  | "Featured"
  | "Newest"
  | "Price - High to Low"
  | "Price - Low to High";

const Sort = () => {
  const [sortValue, setSortValue] = useState<SortValueType>("Sort");
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    function handleClick() {
      setShowMenu(false);
    }
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [showMenu]);

  return (
    <div className="flex justify-between font-light">
      <p>Showing 1-20 products of 4,040 products</p>
      <div className="relative">
        <button
          type="button"
          className="cursor-pointer flex items-center gap-2"
          onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.stopPropagation();
            setShowMenu(!showMenu);
          }}
        >
          <span>{sortValue}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
            fill="none"
            className={clsx(
              showMenu ? "rotate-x-180" : "rotate-x-0",
              "transition-all ease-out duration-200"
            )}
          >
            <path
              d="M1 1L7 6.33333L13 1"
              stroke="#767676"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        {showMenu ? (
          <ul
            className="absolute bottom-0 right-0 translate-y-[105%]
            z-10 w-48 text-sm text-light bg-white rounded-md
            border-[1px] border-solid border-gray-200 overflow-hidden"
          >
            <li>
              <button
                type="button"
                className="py-2 px-4 cursor-pointer w-full text-left hover:bg-gray-100"
                onClick={() => {
                  setSortValue("Featured");
                }}
              >
                Featured
              </button>
              <button
                type="button"
                className="py-2 px-4 cursor-pointer w-full text-left hover:bg-gray-100"
                onClick={() => {
                  setSortValue("Newest");
                }}
              >
                Newest
              </button>
            </li>
            <li>
              <button
                type="button"
                className="py-2 px-4 cursor-pointer w-full text-left hover:bg-gray-100"
                onClick={() => {
                  setSortValue("Price - Low to High");
                }}
              >
                Price - Low to High
              </button>
            </li>
            <li>
              <button
                type="button"
                className="py-2 px-4 cursor-pointer w-full text-left hover:bg-gray-100"
                onClick={() => {
                  setSortValue("Price - High to Low");
                }}
              >
                Price - High to Low
              </button>
            </li>
          </ul>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Sort;
