import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import HamburgerIcon from "@/components/Icons/Hamburger";
import SearchIcon from "@/components/Icons/Search";
import UserIcon from "@/components/Icons/User";
import CartIcon from "@/components/Icons/Cart";
import WishlistIcon from "@/components/Icons/Wishlist";

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
  return (
    <nav className="sticky top-0 left-0 w-full z-10 bg-white shadow-sm md:shadow-xs">
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
            <p>FurniFlex</p>
          </Link>
        </div>
        <form className="flex-1 h-3/5 w-full rounded-sm hidden md:flex bg-[#F3F3F3] overflow-hidden">
          <input
            type="text"
            className="flex-1 h-full border-none outline-none pl-4 pr-1 text-sm"
            placeholder="Search for rugs, furniture and more..."
          />
          <button
            type="button"
            className="h-full w-14 flex items-center justify-center"
          >
            <SearchIcon />
          </button>
        </form>
        <ul className="h-full list-none flex items-center justify-end gap-6 lg:gap-8">
          <Link href="/auth" title="Your account">
            <UserIcon />
          </Link>
          <Link href="/wishlist" title="Your wishlist">
            <WishlistIcon />
          </Link>
          <Link href="/cart" title="Your cart">
            <CartIcon />
          </Link>
        </ul>
      </div>
      <section className="hidden md:block border-t-[1px] border-b-[1px] border-solid border-[#ECECEC] py-4">
        <ul
          className={clsx(
            navbarContainerWidth,
            "md:w-full lg:w-11/12 flex md:justify-around lg:justify-between list-none lg:gap-2"
          )}
        >
          {categoriesMenu.map((categoryMenu) => (
            <Link
              href="#"
              key={categoryMenu.id}
              className={clsx(
                categoryMenu.id === 1 ? "text-[#7F534B]" : "text-black",
                "text-[0.5rem] lg:text-[0.6rem] xl:text-[0.75rem] uppercase hover:underline"
              )}
            >
              {categoryMenu.name}
            </Link>
          ))}
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
