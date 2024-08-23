import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "productsSlice/fetchProducts",
  async (items) => {
    try {
      const res = await axios.get(`https://dummyjson.com/${items}`);
      return res.data.products;
    } catch (err) {
      toast.error(err);
    }
  }
);
export const fetchProducts2 = createAsyncThunk(
  "productsSlice/fetchProducts2",
  async () => {
    try {
      const res = await axios.get(
        "https://dummyjson.com/products/category/mens-shoes"
      );
      return res.data.products;
    } catch (err) {
      toast.error(err);
    }
  }
);
const productsSlice = createSlice({
  initialState: {
    products: [],
    products2: [],
  },
  name: "productsSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
    builder.addCase(fetchProducts2.fulfilled, (state, action) => {
      state.products2 = action.payload;
    });
  },
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
