import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { removeWishlistSync } from "../../app/wishlistsSlice";
import { useDispatch } from "react-redux";

const ItemWishlist = ({ data }) => {
  const dispatch = useDispatch();
  const productName = data.product.name;

  const handleRemoveWishlist = async (e) => {
    const id = data._id;
    console.log(id);
    const action = await removeWishlistSync({ id });
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

ItemWishlist.propTypes = {
  data: PropTypes.object,
};

ItemWishlist.defaultProps = {
  data: {},
};

export default ItemWishlist;
