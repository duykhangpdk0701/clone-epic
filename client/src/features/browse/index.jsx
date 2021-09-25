import { unwrapResult } from "@reduxjs/toolkit";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAll } from "../../app/productsSlice";

const Browse = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const action = getAll();
      const actionResult = await dispatch(action);
      const currentResult = unwrapResult(actionResult);
      console.log(currentResult);
    };
    fetchProduct();
  }, []);

  return (
    <div>
      <h1>this is browse page</h1>
    </div>
  );
};

export default Browse;
