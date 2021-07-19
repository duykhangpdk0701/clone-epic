import axios from "axios";
import * as actions from "./productActionType";

export const fetchProduct = async (id, dispatch) => {
  const product = await axios
    .get(`${process.env.REACT_APP_URL_SERVER}/products/${id}`)
    .catch((e) => {
      console.log("error: " + e);
    });
  //api return an array with 1 item so that is why i access first item in array
  dispatch(setProduct(product.data[0]));
};

export const setProduct = (product) => ({
  type: actions.SET_PRODUCT,
  payload: product,
});
