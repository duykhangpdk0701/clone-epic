import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import style from "./Register.module.scss";
//import redux
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../app/authSlice";
import { unwrapResult } from "@reduxjs/toolkit";
//import assets
import logo from "../../assets/logo.svg";
import pending from "../../assets/img/pending.svg";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [active, setActive] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();
  const loading = useSelector((state) => state.auth.loading);

  useEffect(() => {
    handleActive(
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    );
  }, [firstName, lastName, username, email, password, confirmPassword]);

  const handleActive = (
    firstName,
    lastName,
    username,
    email,
    password,
    confirmPassword,
  ) => {
    if (
      firstName !== "" &&
      lastName !== "" &&
      username !== "" &&
      email !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleSubmitButton = async (e) => {
    e.preventDefault();
    try {
      const action = register({
        firstName,
        lastName,
        username,
        email,
        password,
        confirmPassword,
      });
      const actionResult = await dispatch(action);
      unwrapResult(actionResult);
      history.push("/auth/login");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={style.page}>
      <form className={style.form}>
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
            Register a Dicegames account:
          </label>
        </div>
        <div className={style.form_group}>
          <div className={style.name_container}>
            <input
              className={`${style.input} ${style.input_name}`}
              name="first-name"
              id="first-name"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First name"
            />

            <input
              className={`${style.input} ${style.input_name}`}
              name="last-name"
              id="last-name"
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last name"
            />
          </div>
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
            type="email"
            className={style.input}
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>

        <div className={style.form_group}>
          <input
            className={style.input}
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            type="password"
          />
        </div>

        <div className={style.form_group}>
          <input
            className={style.input}
            name="confirm-password"
            id="confirm-password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
            type="password"
          />
        </div>

        <div className={style.form_group}>
          <button
            size="lg"
            className={
              active ? style.button : `${style.button} ${style.button_active} `
            }
            onClick={handleSubmitButton}>
            {loading ? (
              <img className={style.pending} src={pending} alt="" />
            ) : (
              "Submit"
            )}
          </button>
        </div>
        <div className={style.form_group}>
          <p className={style.label_login}>
            Already have a Dicegames Account?{" "}
            <Link to="/auth/login">Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
