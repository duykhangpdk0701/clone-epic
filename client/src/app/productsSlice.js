import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import productApi from "../api/productApi";

const initialState = {
  loading: false,
  error: "",
  current: [],
};

export const getAll = createAsyncThunk("product/getAll", async (data) => {
  const res = await productApi.getAll();
  return res;
});

const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      state.current = state.current.filter((item) =>
        item.wishlist === action.payload.productId
          ? { ...item, isInWishlist: true }
          : item,
      );
    },

    removeWishlist: (state, action) => {
      state.current = state.current.filter((item) =>
        item.wishlist === action.payload.productId
          ? { ...item, isInWishlist: false }
          : item,
      );
    },

    purchase: (state, action) => {
      state.current = state.current.filter((item) =>
        item.purchase === action.payload.productId
          ? { ...item, isPurchase: false }
          : item,
      );
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAll.pending, (state) => {
        state.loading = true;
      })
      .addCase(getAll.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getAll.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      });
  },
});

export const { addWishlist, removeWishlist, purchase } = productSlices.actions;

export default productSlices.reducer;
