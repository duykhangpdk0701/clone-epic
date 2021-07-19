import * as actions from "../actions/productsActionsType";

const initProducts = [];

const sortByAlphabetical = (state) =>
  [...state].sort((a, b) => {
    const firstProductName = a.name.replaceAll(" ", "").toLowerCase();
    const secondProductName = b.name.replaceAll(" ", "").toLowerCase();
    return firstProductName.localeCompare(secondProductName);
  });

const sortByLowToHigh = (state) =>
  [...state].sort((a, b) => {
    const firstProductPrice = a.price;
    const secondProductPrice = b.price;
    return firstProductPrice - secondProductPrice;
  });

const sortByHighToLow = (state) =>
  [...state].sort((a, b) => {
    const firstProductPrice = a.price;
    const secondProductPrice = b.price;
    return secondProductPrice - firstProductPrice;
  });

const productReducers = (state = initProducts, action) => {
  switch (action.type) {
    case actions.SET_PRODUCT:
      return action.payload;
    case actions.REMOVE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);
    //sort product
    case actions.SORT_PRODUCTS.ALPHABETICAL:
      return sortByAlphabetical(state);
    case actions.SORT_PRODUCTS.NEW_RELEASE:
      return [...state];
    case actions.SORT_PRODUCTS.LOW_TO_HIGH:
      return sortByLowToHigh(state);
    case actions.SORT_PRODUCTS.HIGH_TO_LOW:
      return sortByHighToLow(state);
    //search products
    case actions.SEARCH_PRODUCT:
      return [...state].map((product) => {
        const productName = product.name.toLowerCase();
        const reg = new RegExp(action.payload.search);
        return !reg.test(productName)
          ? { ...product, isMatchSearch: false }
          : { ...product, isMatchSearch: true };
      });
    default:
      return state;
  }
};

export default productReducers;
