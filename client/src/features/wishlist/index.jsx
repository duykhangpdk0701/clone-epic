import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getById } from "../../app/wishlistsSlice";
import SubNav from "../../components/header/subNav/SubNav";
import style from "./wishlist.module.scss";

//import logo
import pending from "../../assets/img/pending.svg";
import ItemWishlist from "./ItemWishlist";
import ListCategory from "../browse/listCategory";

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
      <SubNav />
      <section className={style.section}>
        <div className={style.wrapper}>
          <ul className={style.content}>
            {loadingWishlist ? (
              <p>
                <img src={pending} alt="pending" />
              </p>
            ) : (
              wishlist.map((item) => (
                <ItemWishlist key={item._id} data={item} />
              ))
            )}
          </ul>
          <ListCategory className={style.category} />
        </div>
      </section>
    </>
  );
};

export default Wishlist;
