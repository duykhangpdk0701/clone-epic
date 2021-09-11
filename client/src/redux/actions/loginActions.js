import * as actions from "./loginActionsType";
import axios from "axios";

export const postLogin = async (dispatch, username, password) => {
  await axios
    .post(`${process.env.REACT_APP_URL_SERVER}/users/login`, {
      userNames: username,
      passwords: password,
    })
    .then((res) => {
      dispatch(login(res.data));
    })
    .catch((e) => {
      console.log("error: " + e);
    });
};

export const getLogin = async (dispatch, username, password) => {
  await axios
    .post(`${process.env.REACT_APP_URL_SERVER}/users/user`, {
      userNames: username,
      passwords: password,
    })
    .then((res) => {
      dispatch(login(res.data));
    })
    .catch((e) => {
      console.log("error: " + e);
    });
};

export const login = (data) => {
  return {
    type: actions.LOG_IN,
    payload: data,
  };
};

export const logout = () => ({
  type: actions.LOG_OUT,
  payload: {
    isLogin: false,
    user: {},
    message: "",
  },
});
