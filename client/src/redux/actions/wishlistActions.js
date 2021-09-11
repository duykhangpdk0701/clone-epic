import * as actions from "./wishlistActionsType";
import axios from "axios";

export const fetchWishlist = async (dispatch, userId) => {
  const listWishlist = await axios
    .post(`${process.env.REACT_APP_URL_SERVER}/wishlist`, { userId })
    .catch((e) => console.log("error: " + e));
  dispatch(setWishlist(listWishlist.data));
};

export const loadingSpinner = () => ({
  type: actions.LOADING_SPINNER,
  payload: {},
});

export const setWishlist = (wishlist) => ({
  type: actions.SET_WISHLIST,
  payload: wishlist,
});

export const removeWishlist = (userId, productId) => ({
  type: actions.REMOVE_WISHLiST,
  payload: { userId, productId },
});

export const addWishlist = (userId, productId) => ({
  type: actions.ADD_WISHLIST,
  payload: { userId, productId },
});
