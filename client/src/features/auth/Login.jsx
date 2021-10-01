import React, { useState, useEffect } from "react";
import style from "./Login.module.scss";
import { Link, useHistory } from "react-router-dom";
//import redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../app/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";

import pending from "../../assets/img/pending.svg";
import logo from "../../assets/logo.svg";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const [error, setError] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    handleActive(username, password);
  }, [username, password]);

  const handleActive = (username, password) => {
    if (username !== "" && password !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSubmitBtn = async (e) => {
    e.preventDefault();
    try {
      const action = login({ username, password });
      const actionResult = await dispatch(action);
      unwrapResult(actionResult);
      history.push("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={style.page}>
      <form className={style.form}>
        {/* logo */}
        <div className={style.form_group}>
          <div className={style.logo_container}>
            <img src={logo} alt="Logo" className={style.logo} />
          </div>
        </div>

        {!error ? (
          ""
        ) : (
          <div className={style.form_group}>
            <div className={style.error_box}>
              <p>{error}</p>
            </div>
          </div>
        )}
        <div className={style.form_group}>
          <label className={style.description}>
            Login with dice game account:
          </label>
        </div>
        <div className={style.form_group}>
          <input
            className={style.input}
            name="username"
            id="username"
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
          />
        </div>
        <div className={style.form_group}>
          <input
            className={style.input}
            name="password"
            id="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </div>
        <div className={style.form_group}>
          <div className={style.forgot_password_container}>
            <Link to="/auth/register">Forgot Password</Link>
          </div>
        </div>
        <div className={style.form_group}>
          <button
            size="lg"
            className={
              active ? style.button : `${style.button} ${style.button_active}`
            }
            onClick={handleSubmitBtn}>
            {loading ? (
              <img className={style.pending} src={pending} alt="" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <div className={style.form_group}>
          <p className={style.label_register}>
            Don't have a Gamedices Account?{" "}
            <Link to="/auth/register">Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
