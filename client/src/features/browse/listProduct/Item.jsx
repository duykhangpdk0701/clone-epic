import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
// import redux
import { addWishlistSync } from "../../../app/wishlistsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
//import style
import style from "./Item.module.scss";
import formatterPrice from "../../../helper/formatPrice";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const loadingAddWishlist = useSelector((state) => state.wishlists.loading);

  const handleAddToWishlist = async (e) => {
    const userId = localStorage.getItem("userId");
    const action = addWishlistSync({
      userId: userId,
      productId: data._id,
    });
    dispatch(action);
  };

  return (
    <>
      <div className={style.item_wrapper}>
        <Link to={`/store/product/${data._id}`}>
          <p>{data.name}</p>
          <p>{formatterPrice(data.price)}</p>
        </Link>

        {loadingAddWishlist ? (
          "...loading"
        ) : (
          <button onClick={handleAddToWishlist}>Add</button>
        )}
      </div>
    </>
  );
};

Item.propTypes = {
  data: PropTypes.object,
};

Item.defaultProps = {
  data: {},
};

export default Item;
