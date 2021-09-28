import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../app/productsSlice";
import style from "./browse.module.scss";
import Item from "./Item";

const Browse = () => {
  const dispatch = useDispatch();
  const [product, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const action = getAll();
      const actionResult = await dispatch(action);
      const currentResult = unwrapResult(actionResult);
      setProducts(currentResult);
    };
    fetchProducts();
    return;
  }, [dispatch]);

  return (
    <div className={style.container}>
      <h1>this is browse page</h1>
      <ul>
        {product.map((element) => (
          <li key={element._id.toString()}>
            <Item data={element} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Browse;
