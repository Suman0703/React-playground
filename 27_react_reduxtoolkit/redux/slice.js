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
    },

    removeFromCart: (state, action) => {
      const id = action.payload;

      const itemToRemove = state.items.find(item => item.id === id);

      if (itemToRemove) {
        state.count -= itemToRemove.qty;
        state.items = state.items.filter(item => item.id !== id);
      }
    },

    clearCart: (state) => {
      state.items = [];
      state.count = 0;
    }
  }
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;