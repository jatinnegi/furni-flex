import { FC } from "react";
import Link from "next/link";

import { useDispatch } from "react-redux";
import { cartMenuClose } from "@/lib/features/cart/cartSlice";

interface Props {
  subTotal: number;
}

const Checkout: FC<Props> = ({ subTotal }) => {
  const dispatch = useDispatch();

  return (
    <div className="py-4 w-full border-t-[1px] border-solid border-gray-200 flex flex-col px-8 gap-4">
      <div className="w-full flex flex-col gap-1">
        <div className="flex justify-between items-end">
          <p>Subtotal</p>
          <p className="text-xl">${subTotal.toLocaleString("en-US")}</p>
        </div>
        <p className="text-xs text-gray-600">
          Shipping, taxes, and discounts calculated at checkout
        </p>
      </div>
      <Link
        href="/checkout"
        className="bg-[var(--color-on-primary)] text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-[var(--color-on-text)]
        transition-all ease-in duration-150 py-3 text-center rounded-sm"
        onClick={() => {
          dispatch(cartMenuClose());
        }}
      >
        Go To Checkout
      </Link>
    </div>
  );
};

export default Checkout;
