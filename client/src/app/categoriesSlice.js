import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import categoriesApi from "../api/categoriesApi";

const initialState = {
  loading: false,
  error: "",
  current: [],
};

export const getAll = createAsyncThunk("category/getAll", async () => {
  const res = await categoriesApi.getAll();
  return res;
});

const categoriesSlice = createSlice({
  name: "category",
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

export default categoriesSlice.reducer;
