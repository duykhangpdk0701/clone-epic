import * as actions from "../actions/productActionType";

const initProduct = {};

const productReducer = (state = initProduct, action) => {
  switch (action.type) {
    case actions.SET_PRODUCT:
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;
