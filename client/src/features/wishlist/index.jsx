import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../app/wishlistsSlice";
import SubNav from "../../components/header/subNav/SubNav";
import style from "./wishlist.module.scss";

//import logo
import pending from "../../assets/img/pending.svg";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlists.current);
  const loadingWishlist = useSelector((state) => state.wishlists.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchWishlist = async () => {
      const action = getById(localStorage.getItem("userId"));
      dispatch(action);
    };
    fetchWishlist();
    return;
  }, [dispatch]);

  return (
    <>
      {console.log(wishlist)}
      <SubNav />
      <div className={style.container}>
        <h1>this is wish list page</h1>

        {loadingWishlist ? (
          <p>
            <img src={pending} alt="pending" />
          </p>
        ) : (
          wishlist.map((item) => (
            <p key={item.productId._id}>{item.productId.name}</p>
          ))
        )}
      </div>
    </>
  );
};

export default Wishlist;
