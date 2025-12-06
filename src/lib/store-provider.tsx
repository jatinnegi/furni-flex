"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { emptyCartMenuClose } from "./features/cart/cartSlice";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(makeStore());

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }

  useEffect(() => {
    function handleClick() {
      storeRef.current.dispatch(emptyCartMenuClose());
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
