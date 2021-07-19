import { combineReducers } from "redux";
import loginReducers from "./loginReducers";
import productReducers from "./productsReducers";
import productReducer from "./productReducer";
import wishlistReducer from "./wishlistReducers";
import purchaseReducer from "./purchaseReducers";

const allReducer = combineReducers({
  login: loginReducers,
  products: productReducers,
  product: productReducer,
  wishlist: wishlistReducer,
  purchase: purchaseReducer,
});

export default allReducer;
