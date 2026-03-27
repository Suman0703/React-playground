import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  count: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload;

      const existing = state.items.find(
        (item) => item.id === product.id
      );

      if (existing) {
        existing.qty += product.qty;
      } else {
        state.items.push(product);
      }

      state.count += product.qty;
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;