import React from "react";
import style from "./SubNav.module.scss";
import { NavLink } from "react-router-dom";

const SubNav = () => {
  return (
    <div className={style.wrapper}>
      <nav className={style.container}>
        <div className={style.feature_page}>
          <div className={style.discover_and_browse}>
            <NavLink
              className={`${style.nav_link} ${style.discover_and_browse_nav_link}`}
              activeClassName={style.nav_link_active}
              to="/store/discover">
              Discover
            </NavLink>
            <NavLink
              className={`${style.nav_link} ${style.discover_and_browse_nav_link}`}
              activeClassName={style.nav_link_active}
              to="/store/browse">
              Browse
            </NavLink>
          </div>
          <div className={style.wishlist_container}>
            <NavLink
              className={style.nav_link}
              activeClassName={style.nav_link_active}
              to="/store/wishlist">
              Wishlist
            </NavLink>
          </div>
        </div>
        <div className={style.search_bar_wrapper}>
          <input type="text" />
        </div>
      </nav>
    </div>
  );
};

export default SubNav;
