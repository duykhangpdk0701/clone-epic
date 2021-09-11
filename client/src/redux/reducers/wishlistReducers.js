import * as actions from "../actions/wishlistActionsType";
import axios from "axios";

const initWishlist = [];

const addWishlist = async (userId, productId) => {
  const res =
    (await axios
      .post(`${process.env.REACT_APP_URL_SERVER}/wishlist/add-wishlist`, {
        userId,
        productId,
      })
      .catch((e) => console.log("error: " + e))) || false;
  return res === { message: "success" } ? true : false;
};

const removeWishlist = async (userId, productId) => {
  const res =
    (await axios
      .post(`${process.env.REACT_APP_URL_SERVER}/wishlist/remove-wishlist`, {
        userId,
        productId,
      })
      .catch((e) => console.log("error: " + e))) || false;
  return res === { message: "success" } ? true : false;
};

const wishlistReducer = (state = initWishlist, action) => {
  switch (action.type) {
    case actions.SET_WISHLIST:
      return action.payload;

    case actions.REMOVE_WISHLiST:
      if (removeWishlist(action.payload.userId, action.payload.productId))
        return state.filter(
          (item) => item.productId !== action.payload.productId,
        );
      return state;

    case actions.ADD_WISHLIST:
      if (addWishlist(action.payload.userId, action.payload.productId))
        return [...state, action.payload];
      return state;

    default:
      return state;
  }
};

export default wishlistReducer;
