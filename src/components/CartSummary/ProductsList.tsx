import { FC } from "react";
import { useDispatch } from "react-redux";
import { cartUpdateQuantity } from "@/lib/features/cart/cartSlice";
import CartItem from "./CartItem";

interface Props {
  items: CartItemProps[];
}

const ProductsList: FC<Props> = ({ items }) => {
  const dispatch = useDispatch();

  return (
    <ul className="flex-1 flex flex-col gap-8 px-8 py-5 overflow-y-scroll">
      {items.map((item: CartItemProps) => (
        <CartItem
          key={item.productId}
          product={item}
          updateQuantity={(productId: number, newQuantity: number) => {
            console.log(productId);
            console.log(newQuantity);

            dispatch(cartUpdateQuantity({ productId, newQuantity }));
          }}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
