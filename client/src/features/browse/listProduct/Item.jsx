import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { addWishlist } from "../../../app/wishlistsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Item = ({ data }) => {
  const dispatch = useDispatch();
  const loadingAddWishlist = useSelector((state) => state.wishlists.loading);

  const handleAddToWishlist = async (e) => {
    const userId = localStorage.getItem("userId");
    const action = addWishlist({ userId: userId, productId: data._id });
    dispatch(action);
  };

  return (
    <>
      <Link to={`/store/product/${data._id}`}>
        <p>{data.name}</p>
      </Link>

      {loadingAddWishlist ? (
        "...loading"
      ) : (
        <button onClick={handleAddToWishlist}>Add</button>
      )}
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
