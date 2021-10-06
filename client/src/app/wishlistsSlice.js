import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistApi from "../api/wishlist";

const initialState = {
  loading: false,
  error: "",
  current: [],
};

export const getById = createAsyncThunk("wishlist/getById", async (data) => {
  const res = await wishlistApi.getById(data);
  return res;
});

export const addWishlistSync = createAsyncThunk(
  "wishlist/addWishlist",
  async (data) => {
    const { userId, productId } = data;
    const res = await wishlistApi.addWishlist(userId, productId);
    return res;
  },
);

export const removeWishlistSync = createAsyncThunk(
  "wishlist/removeWishlist",
  async (data) => {
    const { userId, productId } = data;
    const res = await wishlistApi.removeWishlist(userId, productId);
    return res;
  },
);

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      //getById case
      .addCase(getById.pending, (state) => {
        state.loading = true;
      })
      .addCase(getById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getById.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload;
      })
      //addWishlist case
      .addCase(addWishlistSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWishlistSync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addWishlistSync.fulfilled, (state, action) => {
        state.loading = false;
        state.current = [...state.current, action.payload];
      })
      //  removeWishlist case
      .addCase(removeWishlistSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeWishlistSync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeWishlistSync.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, productId } = action.payload;
        state.current = state.current.filter((wishlist) => {
          return wishlist.userId !== userId && wishlist.productId !== productId;
        });
      });
  },
});

export default wishlistSlice.reducer;
