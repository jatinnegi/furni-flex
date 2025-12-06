"use client";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { cartMenuClose } from "@/lib/features/cart/cartSlice";
import clsx from "clsx";
import Header from "./Header";
import ProductsList from "./ProductsList";
import Checkout from "./Checkout";
import Overlay from "@/components/Overlay";

const CartSummary = () => {
  const dispatch = useDispatch();

  const { display, items, subTotal } = useSelector(
    (state: RootState) => state.cart
  );

  const displayMenu = display && items.length > 0;

  return (
    <Overlay
      active={displayMenu}
      handleClose={(e: React.MouseEvent<HTMLDivElement | MouseEvent>) => {
        e.preventDefault();
        dispatch(cartMenuClose());
      }}
    >
      <div
        className={clsx(
          displayMenu ? "translate-x-0" : "translate-x-full",
          "fixed top-0 right-0 w-md h-full bg-white flex flex-col z-50 transition-all linear duration-500"
        )}
      >
        <Header
          close={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
            e.preventDefault();
            dispatch(cartMenuClose());
          }}
        />
        <ProductsList items={items} />
        <Checkout subTotal={subTotal} />
      </div>
    </Overlay>
  );
};

export default CartSummary;
