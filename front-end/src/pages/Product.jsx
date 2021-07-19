import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../redux/actions/productAction";

const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  useEffect(() => {
    fetchProduct(id, dispatch);
  }, [id, dispatch]);

  return (
    <div>
      <h1>{product.id}</h1>
      <h1>{product.price}</h1>
    </div>
  );
};
export default Product;
