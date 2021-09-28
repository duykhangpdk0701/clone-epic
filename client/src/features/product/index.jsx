import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getById } from "../../app/productSlice";
import style from "./product.module.scss";

const initProductState = {
  _id: "",
  name: "",
  createdAt: "",
  updatedAt: "",
};

const Product = ({ match }) => {
  const pramsId = match.params.id.toString();
  const [product, setProduct] = useState(initProductState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const action = getById(pramsId);
      const actionResult = await dispatch(action);
      const currentResult = unwrapResult(actionResult);
      setProduct(currentResult);
    };
    fetchProduct();
  }, [dispatch, pramsId]);

  return (
    <div className={style.container}>
      <h1>{product.name}</h1>
      <h1>{product._id}</h1>
      <h1>{product.createdAt}</h1>
      <h1>{product.updatedAt}</h1>
    </div>
  );
};

export default Product;
