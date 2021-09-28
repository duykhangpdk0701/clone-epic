import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../api/productApi";

const initialState = {
  loading: false,
  error: "",
  current: {},
};

export const getById = createAsyncThunk("product/getById", async (id) => {
  const res = await productApi.getById(id);
  return res;
});

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
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
      });
  },
});

export default productSlice.reducer;
