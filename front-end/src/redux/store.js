import { applyMiddleware, createStore } from "redux";
import allReducer from "./reducers";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(
  allReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export default store;
