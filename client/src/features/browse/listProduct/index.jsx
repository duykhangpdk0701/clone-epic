import { unwrapResult } from "@reduxjs/toolkit";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAll } from "../../../app/productsSlice";

const ListProduct = ({ className }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

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
    <div className={className}>
      <ul>
        {products.map((item) => (
          <li key={item._id}>
            <Link to={`/store/product/${item._id}`}>
              <p>{item.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
