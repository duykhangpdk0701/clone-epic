import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { removeWishlist } from "../../app/wishlistsSlice";
import { useDispatch } from "react-redux";

const ItemWishlist = ({ data }) => {
  const dispatch = useDispatch();
  const productName = data.productId.name;

  const handleRemoveWishlist = async (e) => {
    const userId = localStorage.getItem("userId");
    const productId = data._id;
    const action = removeWishlist({ userId, productId });
    dispatch(action);
  };

  return (
    <div>
      <Link to={`/store/product/${data._id}`}>
        <p>{productName}</p>
      </Link>
      <button onClick={handleRemoveWishlist}>Remove</button>
    </div>
  );
};

ItemWishlist.propTypes = {};

export default ItemWishlist;
