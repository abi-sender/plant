import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  totalAmount: 0,
};

const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    SetCart: (state, action) => {
      state.cart = action.payload;

      state.totalAmount = action.payload.reduce(
        (total, item) => total + item.price * item.qty,
        0
      );
    },
  },
});

export const { SetCart } = cart.actions;

export default cart.reducer;
