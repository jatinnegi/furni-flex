"use client";
import { useRef, useState } from "react";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import {
  cartMenuOpen,
  emptyCartMenuOpen,
  emptyCartMenuClose,
} from "@/lib/features/cart/cartSlice";

import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";

import SaleMenu from "./CategoryMenus/Sale";
import NewArrivalsMenu from "./CategoryMenus/NewArrivals";

import HamburgerIcon from "@/components/Icons/Hamburger";
import SearchIcon from "@/components/Icons/Search";
import UserIcon from "@/components/Icons/User";
import CartIcon from "@/components/Icons/Cart";
import WishlistIcon from "@/components/Icons/Wishlist";
import CloseIcon from "@/components/Icons/Close";

const categoriesMenu: { id: number; name: string }[] = [
  { id: 1, name: "Best of sale: 20% sitewide" },
  { id: 2, name: "New Arrivals" },
  { id: 3, name: "Rugs" },
  { id: 4, name: "Bedding" },
  { id: 5, name: "Furniture" },
  { id: 6, name: "Pillows & Throws" },
  { id: 7, name: "Mirrors & Wall Art" },
  { id: 8, name: "Baskets & Decor" },
  { id: 9, name: "Bath" },
  { id: 10, name: "Kitchen" },
  { id: 11, name: "Archive Sale" },
];

const navbarContainerWidth: string = "w-11/12 max-w-[1450px] mx-auto";

const Navbar = () => {
  const dispatch = useDispatch();
  const { items, displayEmptyCartView } = useSelector(
    (state: RootState) => state.cart
  );

  const activeCategoryMenuTimeout = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);

  const [activeCategoryMenu, setActiveCategoryMenu] = useState<number | null>(
    null
  );

  const handleMouseEnterCategory = (id: number) => {
    if (activeCategoryMenuTimeout.current) {
      clearTimeout(activeCategoryMenuTimeout.current);
      activeCategoryMenuTimeout.current = null;
    }

    activeCategoryMenuTimeout.current = setTimeout(() => {
      setActiveCategoryMenu(id);
      activeCategoryMenuTimeout.current = null;
    }, 150);
  };

  const handleMouseLeaveCategory = () => {
    if (activeCategoryMenuTimeout.current) {
      clearTimeout(activeCategoryMenuTimeout.current);
      activeCategoryMenuTimeout.current = null;
    }

    setActiveCategoryMenu(null);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50">
      <nav className="bg-white shadow-sm md:shadow-xs">
        <div
          className={clsx(
            navbarContainerWidth,
            "h-16 md:h-20 flex items-center justify-between md:justify-center gap-6 lg:gap-10 xl:gap-20"
          )}
        >
          <div className="flex items-center justify-center">
            <button type="button" className="block md:hidden">
              <HamburgerIcon />
            </button>
            <Link
              href="/"
              className="h-full flex items-center justify-start md:justify-center text-xl"
            >
              <div className="relative h-[50px] w-[50px]">
                <Image
                  src="/image/assets/main-logo.png"
                  alt="main-logo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="text-[var(--color-primary-darker)] text-sm md:text-base">
                FurniFlex
              </p>
            </Link>
          </div>
          <form className="flex-1 h-3/5 w-full rounded-sm hidden md:flex bg-[#F3F3F3] overflow-hidden">
            <input
              type="text"
              className="flex-1 h-full border-none outline-none pl-4 pr-1 text-sm"
              placeholder="Search for rugs, furnitures and more..."
            />
            <button
              type="button"
              className="h-full w-14 flex items-center justify-center"
            >
              <SearchIcon />
            </button>
          </form>
          <ul className="h-full list-none flex items-center justify-end gap-3 md:gap-6 lg:gap-8">
            <li>
              <Link href="/auth" title="Your account">
                <UserIcon />
              </Link>
            </li>
            <li>
              <Link
                href="/wishlist"
                title="Your wishlist"
                className="block h-5 w-5"
              >
                <WishlistIcon />
              </Link>
            </li>
            <li className="relative flex items-center">
              <button
                type="button"
                title="Your cart"
                className="h-5 w-5 cursor-pointer"
                onClick={(e: React.MouseEvent) => {
                  e.preventDefault();
                  e.stopPropagation();

                  if (items.length > 0) {
                    dispatch(cartMenuOpen());
                  } else {
                    dispatch(emptyCartMenuOpen());
                  }
                }}
              >
                <CartIcon />
              </button>
              <p
                className={clsx(
                  "absolute -top-2.5 -right-3 text-[10px] font-light bg-[var(--color-primary)] text-[var(--color-on-text)] h-4 w-4 rounded-full flex items-center justify-center",
                  items.length === 0 ? "hidden" : "block"
                )}
              >
                {items.length}
              </p>
              <section
                className={clsx(
                  displayEmptyCartView
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none",
                  "absolute bottom-0 right-0 translate-y-full bg-white rounded-xs border-[0.5px] border-solid border-gray-200 w-96 shadow-lg py-6 px-8 flex flex-col gap-2 transition-all ease-in duration-50"
                )}
                onClick={(e: React.MouseEvent<HTMLElement>) => {
                  e.stopPropagation();
                }}
              >
                <div className="flex justify-between items-center">
                  <h4 className="text-2xl">Your Cart</h4>
                  <button
                    type="button"
                    className="text-gray-500 h-5 w-5 cursor-pointer"
                    onClick={() => {
                      dispatch(emptyCartMenuClose());
                    }}
                  >
                    <CloseIcon />
                  </button>
                </div>
                <p className="text-base font-light mt-2">
                  You don't have anything in your cart yet!
                </p>
                <button
                  type="button"
                  className="uppercase bg-black text-white py-2.5 text-xs tracking-widest font-medium mt-2 cursor-pointer"
                >
                  Shop All
                </button>
              </section>
            </li>
          </ul>
        </div>
        <section
          className="hidden md:block border-t-[1px] border-b-[1px] border-solid border-[#ECECEC]"
          onMouseLeave={() => {
            handleMouseLeaveCategory();
          }}
        >
          <ul
            className={clsx(
              navbarContainerWidth,
              "md:w-full lg:w-11/12 xl:w-full flex md:justify-around lg:justify-between list-none lg:gap-2"
            )}
          >
            {categoriesMenu.map((categoryMenu) => (
              <Link
                href="#"
                key={categoryMenu.id}
                onMouseEnter={() => {
                  handleMouseEnterCategory(categoryMenu.id);
                }}
                className={clsx(
                  categoryMenu.id === 1
                    ? "text-[var(--color-primary)] font-normal"
                    : "text-[var(--color-text)] font-light",
                  "py-4 text-[0.5rem] lg:text-[0.6rem] xl:text-[0.75rem] uppercase hover:underline"
                )}
              >
                {categoryMenu.name}
              </Link>
            ))}
          </ul>
          <div
            className={clsx(
              activeCategoryMenu !== null
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none",
              "opacity-0 absolute bottom-0 translate-y-full left-0 w-full min-h-96 bg-white shadow-lg transition-out linear duration-300"
            )}
          >
            <SaleMenu
              display={
                activeCategoryMenu === null ? null : activeCategoryMenu === 1
              }
            />
            <NewArrivalsMenu
              display={
                activeCategoryMenu === null ? null : activeCategoryMenu === 2
              }
            />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Navbar;
