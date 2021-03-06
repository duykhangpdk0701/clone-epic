import React, { useEffect, useMemo } from "react";
import queryString from "query-string";
//import redux
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { getAll } from "../../../app/productsSlice";
//import feature
import Item from "./Item";
import SortListProduct from "./SortListProduct";
//import style
import style from "./listProduct.module.scss";

const ListProduct = ({ className }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.current);
  const history = useHistory();
  const urlParams = useMemo(
    () =>
      queryString.parse(history.location.search, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      }),
    [history.location.search],
  );

  useEffect(() => {
    const fetchProducts = async () => {
      const action = getAll({ urlParams });
      dispatch(action);
    };
    fetchProducts();
    return;
  }, [dispatch, urlParams]);

  return (
    <div className={className}>
      <SortListProduct />
      <ul className={style.browse_grid}>
        {products.map((item) => (
          <li key={item._id} className={style.li}>
            <Item data={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
