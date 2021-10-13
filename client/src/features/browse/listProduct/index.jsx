import React, { useEffect } from "react";
//import redux
import { useDispatch, useSelector } from "react-redux";
import { getAll } from "../../../app/productsSlice";
//import feature
import Item from "./Item";
import SortListProduct from "./SortListProduct";

const ListProduct = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.current);

  useEffect(() => {
    const fetchProducts = async () => {
      const action = getAll();
      dispatch(action);
    };
    fetchProducts();
    return;
  }, [dispatch]);

  return (
    <div className={className}>
      <SortListProduct />
      <ul>
        {products.map((item) => (
          <li key={item._id}>
            <Item data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
