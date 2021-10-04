import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getById } from "../../app/productSlice";
import style from "./product.module.scss";

//import pending
import pending from "../../assets/img/pending.svg";
import SubNav from "../../components/header/subNav/SubNav";

const Product = ({ match }) => {
  const product = useSelector((state) => state.product.current);
  const loadingProduct = useSelector((state) => state.product.loading);
  const pramsId = match.params.id.toString();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchProduct = async () => {
      const action = getById(pramsId);
      dispatch(action);
    };
    fetchProduct();
    return;
  }, [dispatch, pramsId]);

  return (
    <>
      <SubNav />
      {loadingProduct ? (
        <div className={style.container}>
          <img src={pending} alt="pending" />
        </div>
      ) : (
        <div className={style.container}>
          <h1>{product.name}</h1>
          <h1>{product._id}</h1>
          <h1>{product.createdAt}</h1>
          <h1>{product.updatedAt}</h1>
        </div>
      )}
    </>
  );
};

export default Product;
