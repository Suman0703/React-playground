import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    const resp = await fetch("https://dummyjson.com/products");
    const data = await resp.json();
    return data.products;
  }
);

const initialState = {
  items: [],
  status: "idle",   // idle | loading | succeeded | failed
  error: null
};

const productSlice = createSlice({
  name: "productSlice",
  initialState,

  extraReducers: (builder) => {
    builder
      // ⏳ LOADING
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })

      // ✅ SUCCESS
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })

      // ❌ ERROR
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;