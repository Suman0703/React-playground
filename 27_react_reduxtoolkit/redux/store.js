import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slice";
import productsReducer from "./productslice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer
  }
});