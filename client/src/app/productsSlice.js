import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
  loading: false,
  error: "",
  current: {},
};

export const getAll = createAsyncThunk("product/getAll", async (data) => {
  const res = await productApi.getAll();
  return res;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

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

export default productSlice.reducer;
