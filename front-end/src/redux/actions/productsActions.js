import axios from "axios";
import * as actions from "./productsActionsType";

export const fetchProducts = async (dispatch) => {
  const listProducts = await axios
    .get(`${process.env.REACT_APP_URL_SERVER}/products`)
    .catch((e) => {
      console.log("error: " + e);
    });
  const listProductsAfterAddProperty = listProducts.data.map((item) => ({
    ...item,
    isMatchSearch: true,
  }));
  dispatch(setProducts(listProductsAfterAddProperty));
};

export const fetchProductsWithUser = async (dispatch, userId) => {
  const res = await axios
    .post(`${process.env.REACT_APP_URL_SERVER}/products`, { userId: userId })
    .catch((e) => console.log("error: " + e));
  const products = res.data.map((item) => ({ ...item, isMatchSearch: true }));
  dispatch(setProducts(products));
};

export const setProducts = (products) => ({
  type: actions.SET_PRODUCT,
  payload: products,
});

export const removeProducts = (id) => ({
  type: actions.REMOVE_PRODUCT,
  payload: {
    id,
  },
});

export const sortByNewRelease = () => ({
  type: actions.SORT_PRODUCTS.NEW_RELEASE,
  payload: {},
});

export const sortByAlphabetical = () => ({
  type: actions.SORT_PRODUCTS.ALPHABETICAL,
  payload: {},
});

export const sortByLowToHigh = () => ({
  type: actions.SORT_PRODUCTS.LOW_TO_HIGH,
  payload: {},
});

export const sortByHighToLow = () => ({
  type: actions.SORT_PRODUCTS.HIGH_TO_LOW,
  payload: {},
});

export const searchProducts = (text) => ({
  type: actions.SEARCH_PRODUCT,
  payload: {
    search: text,
  },
});

export const groupTags = (tag) => ({
  type: actions.GROUP_TAG,
  payload: {},
});
