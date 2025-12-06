"use client";
import { FC, useState } from "react";
import CartIcon from "@/components/Icons/Cart";
import WishlistIcon from "@/components/Icons/Wishlist";

interface Props {
  handleClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export const CollectionItemAddToCartAction: FC<Props> = ({ handleClick }) => {
  return (
    <button
      type="button"
      data-nprogress-disabled
      className="bg-[var(--color-primary)] text-[var(--color-on-text)] rounded-lg h-10 cursor-pointer flex items-center justify-center gap-2 w-full"
      onClick={handleClick}
    >
      <div className="h-5 w-5">
        <CartIcon />
      </div>
      <p>Add to Cart</p>
    </button>
  );
};

export const CollectionItemAddToWishlistAction = () => {
  const [isInWishlist, setIsInWishlist] = useState<boolean>(false);

  return (
    <button
      type="button"
      className="absolute top-3 right-3 z-[1]
      rounded-lg cursor-pointer h-5 w-5 text-[#7F534B80]
      flex items-center justify-center gap-2"
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();
        setIsInWishlist(!isInWishlist);
      }}
    >
      <WishlistIcon strokeWidth={2} fill={isInWishlist ? "#7F534B" : "none"} />
    </button>
  );
};
