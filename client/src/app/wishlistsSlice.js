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
  return res.map((item) => ({ ...item, loading: false }));
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
    await wishlistApi.removeWishlist(id);
    return id;
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
  reducers: {
    removeWishlist: (state, action) => {
      state.current = state.current.filter((item) => {
        console.log(item);
        const wishlistId = action.payload;
        return item.wishlistId !== wishlistId;
      });
    },

    addToWishlist: (state, action) => {
      state.current = state.current.push(action.payload);
    },
  },

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
        const wishlistId = action.payload;
        state.current = state.current.filter(
          (wishlist) => wishlist._id !== wishlistId,
        );
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

export const { removeWishlist } = wishlistSlice.reducer;
export default wishlistSlice.reducer;
