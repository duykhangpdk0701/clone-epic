import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
//import redux
import { removeWishlistSync } from "../../app/wishlistsSlice";
import { useDispatch } from "react-redux";
//import style
import style from "./ItemWishlist.module.scss";
import formatterPrice from "../../helper/formatPrice";

const ItemWishlist = ({ data }) => {
  const dispatch = useDispatch();
  const productName = data.product.name;
  const price = data.product.price;

  const handleRemoveWishlist = async (e) => {
    const id = data._id;
    const action = await removeWishlistSync({ id });
    dispatch(action);
  };

  return (
    <li className={style.li}>
      <div className={style.container}>
        <Link
          className={style.link}
          to={`/store/product/${data.product._id}`}></Link>
        <div className={style.wrapper_content}>
          <div className={style.img_and_text}>
            <div className={style.img_wrapper}>
              <img src="#" alt="" />
            </div>
            <p>{productName}</p>
          </div>
          <div className={style.price_container}>
            <p>{formatterPrice(price)}</p>
          </div>
          <button
            className={style.button_remove}
            onClick={handleRemoveWishlist}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};

ItemWishlist.propTypes = {
  data: PropTypes.object,
};

ItemWishlist.defaultProps = {
  data: {},
};

export default ItemWishlist;
