import Image from "next/image";
import Link from "next/link";
import HamburgerIcon from "@/components/Icons/Hamburger";
import SearchIcon from "@/components/Icons/Search";
import UserIcon from "@/components/Icons/User";
import CartIcon from "@/components/Icons/Cart";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full h-16 z-10 bg-white shadow-sm border-b-[1px] border-gray-50">
      <div className="h-full w-11/12 flex items-center justify-between mx-auto">
        <ul className="hidden h-full list-none md:flex items-center justify-start gap-8 w-1/3">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>Shop</li>
          <li>Collection</li>
        </ul>
        <button type="button" className="block md:hidden">
          <HamburgerIcon />
        </button>
        <Link
          href="/"
          className="h-full flex-1 flex items-center justify-start md:justify-center text-xl"
        >
          <Image
            src="/image/assets/main-logo.png"
            alt="main-logo"
            height="50"
            width="50"
          />
          <p>FurniFlex</p>
        </Link>
        <ul className="h-full list-none flex items-center justify-end gap-6 md:gap-8 w-1/3">
          <li>
            <SearchIcon />
          </li>
          <li>
            <UserIcon />
          </li>
          <li>
            <CartIcon />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
