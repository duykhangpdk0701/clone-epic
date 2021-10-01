import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistApi from "../api/wishlist";

const initialState = {
  loading: false,
  error: "",
  currentWishlists: [],
};

export const getById = createAsyncThunk("wishlist/getById", async (data) => {
  const res = await wishlistApi.getById(data);
  return res;
});

export const addWishlist = createAsyncThunk(
  "wishlist/addWishlist",
  async (data) => {
    const { userId, productId } = data;
    const res = await wishlistApi.addWishlist(userId, productId);
    return res;
  },
);

export const removeWishlist = createAsyncThunk(
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
        state.currentWishlists = action.payload;
      })
      //addWishlist case
      .addCase(addWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(addWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(addWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.currentWishlists = [...state.currentWishlists, action.payload];
      })
      //  removeWishlist case
      .addCase(removeWishlist.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(removeWishlist.fulfilled, (state, action) => {
        state.loading = false;
        const { userId, productId } = action.payload;
        state.currentWishlists = state.currentWishlists.filter((wishlist) => {
          return wishlist.userId !== userId && wishlist.productId !== productId;
        });
      });
  },
});

export default wishlistSlice.reducer;
