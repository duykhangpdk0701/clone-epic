import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";
import queryString from "query-string";

const initialState = {
  loading: false,
  error: "",
  current: [],
};

export const getAll = createAsyncThunk("product/getAll", async (data) => {
  const { urlParams } = data;
  const stringifyUrlParams = queryString.stringify(urlParams, {
    arrayFormat: "bracket-separator",
    arrayFormatSeparator: "|",
    skipNull: true,
  });

  const res = await productApi.getAll(stringifyUrlParams);
  return res;
});

const productSlices = createSlice({
  name: "products",
  initialState,
  reducers: {
    addWishlistInProduct: (state, action) => {
      state.current = state.current.filter((item) =>
        item.wishlist === action.payload.productId
          ? { ...item, isInWishlist: true }
          : item,
      );
    },

    removeWishlistInProduct: (state, action) => {
      state.current = state.current.filter((item) =>
        item.wishlist === action.payload.productId
          ? { ...item, isInWishlist: false }
          : item,
      );
    },

    purchaseInProduct: (state, action) => {
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

export const {
  addWishlistInProduct,
  removeWishlistInProduct,
  purchaseInProduct,
} = productSlices.actions;

export default productSlices.reducer;
