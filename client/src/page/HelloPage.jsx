import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import productApi from "../api/productApi";
import "./HelloPage.scss";

const Hello = () => {
  useEffect(() => {
    productApi.getAll().then((res) => {
      console.log(res);
    });
  });

  return (
    <div>
      <h1>Hello my name is Khang</h1>
      <Link className="hello-link" to="/counter">
        Counter
      </Link>
      <Link className="hello-link" to="/auth/login">
        Login
      </Link>

      <Link className="hello-link" to="/product/browse">
        Browse
      </Link>
    </div>
  );
};

export default Hello;
