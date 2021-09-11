import * as actions from "../actions/purchaseActionsTypes";

const initPurchase = [];

const purchaseReducer = (state = initPurchase, action) => {
  switch (action.type) {
    case actions.SET_PURCHASE:
      return action.payload;

    case actions.PURCHASE:
      return [...state, action.payload];

    case actions.REMOVE_PURCHASE:
      const purchasePayload = action.payload;
      return state.filter(
        (item) =>
          item.userId === purchasePayload.userId &&
          item.productId === purchasePayload.productId,
      );

    default:
      return state;
  }
};

export default purchaseReducer;
