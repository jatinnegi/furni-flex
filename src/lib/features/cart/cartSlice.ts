import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CartState {
  display: boolean;
  displayEmptyCartView: boolean;
  items: CartItemProps[];
  subTotal: number;
}

interface UpdateQuantityPayload {
  productId: number;
  newQuantity: number;
}

const initialState: CartState = {
  display: false,
  displayEmptyCartView: false,
  items: [],
  subTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItemProps>) => {
      const existingItem = state.items.find(
        (item) => item.productId === action.payload.productId
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.productPrice * item.quantity,
        0
      );
      state.display = true;
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.productPrice * item.quantity,
        0
      );
    },
    cartUpdateQuantity: (
      state,
      action: PayloadAction<UpdateQuantityPayload>
    ) => {
      if (action.payload.newQuantity === 0) {
        state.items = state.items.filter(
          (item) => item.productId !== action.payload.productId
        );
      } else {
        state.items = state.items.map((item) => {
          if (item.productId === action.payload.productId) {
            return {
              ...item,
              quantity: action.payload.newQuantity,
            };
          }
          return item;
        });
      }

      state.subTotal = state.items.reduce(
        (sum, item) => sum + item.productPrice * item.quantity,
        0
      );

      if (!state.subTotal) {
        state.display = false;
      }
    },
    cartMenuOpen: (state) => {
      state.display = true;
    },
    cartMenuClose: (state) => {
      state.display = false;
    },
    emptyCartMenuOpen: (state) => {
      state.displayEmptyCartView = true;
    },
    emptyCartMenuClose: (state) => {
      state.displayEmptyCartView = false;
    },
  },
});

export const {
  addItem,
  removeItem,
  cartUpdateQuantity,
  cartMenuOpen,
  cartMenuClose,
  emptyCartMenuOpen,
  emptyCartMenuClose,
} = cartSlice.actions;
export default cartSlice.reducer;
