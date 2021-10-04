import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAll } from "../../../app/productsSlice";

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
