import * as actions from "./purchaseActionsTypes";
import axios from "axios";

export const fetchPurchase = async (dispatch, userId) => {
  const res = await axios
    .post(`${process.env.REACT_APP_URL_SERVER}/purchase`, { userId })
    .catch((e) => console.log("error: " + e));

  dispatch(setPurchase(res.data));
};

export const purchase = (userId, productId) => ({
  type: actions.PURCHASE,
  payload: { userId, productId },
});

export const setPurchase = (purchase) => ({
  type: actions.PURCHASE,
  payload: purchase,
});

export const removePurchase = (userId, productId) => ({
  type: actions.REMOVE_PURCHASE,
  payload: {
    userId,
    productId,
  },
});
