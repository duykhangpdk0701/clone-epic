import React from "react";
import style from "./SubNav.module.scss";
import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <div className={style.wrapper}>
      <nav className={style.container}>
        <div className={style.feature_page}>
          <div className={style.discover_and_browse}>
            <Link to="/store/discover">Discover</Link>
            <Link to="/store/browse">Browse</Link>
          </div>
          <div className={style.wishlist_container}>
            <Link to="/store/wishlist">Wishlist</Link>
          </div>
        </div>
        <div className={style.search_bar_wrapper}></div>
      </nav>
    </div>
  );
};

export default SubNav;
