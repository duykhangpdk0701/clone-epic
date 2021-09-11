import * as actions from "./loginActionsType";

const initLogin = {
  isLogged: false,
  user: {},
  message: "",
};

const loginReducers = (state = initLogin, action) => {
  switch (action.type) {
    case actions.LOG_IN:
      return state.payload;
    case actions.LOG_OUT:
      return state.payload;
    default:
      return state;
  }
};

export default loginReducers;
