import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import wishlistApi from "../api/wishlist";

const initialState = {
  loading: false,
  error: "",
  count: 0,
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
    const { id } = data;
    const res = await wishlistApi.removeWishlist(id);
    return res;
  },
);

//! this is only testing
export const getCountWishlistByUserIdSync = createAsyncThunk(
  "wishlist/getCountWishlistByUserId",
  async (data) => {
    const { userId } = data;
    const res = await wishlistApi.getCountWishlistByUserId(userId);
    return res.countWishlist;
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
      })

      //! this is only testing
      // getCountWishlistBuUserId
      .addCase(getCountWishlistByUserIdSync.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCountWishlistByUserIdSync.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      })
      .addCase(getCountWishlistByUserIdSync.fulfilled, (state, action) => {
        state.loading = false;
        state.count = action.payload;
      });
  },
});

export default wishlistSlice.reducer;
