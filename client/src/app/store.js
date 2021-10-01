import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import authReducer from "./authSlice";
import categoriesSlice from "./categoriesSlice";
import productSlice from "./productSlice";
import productsSlice from "./productsSlice";
import wishlistsSlice from "./wishlistsSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    product: productSlice,
    products: productsSlice,
    categories: categoriesSlice,
    wishlists: wishlistsSlice,
  },
});
