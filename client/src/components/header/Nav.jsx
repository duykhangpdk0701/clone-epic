import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
import style from "./Nav.module.scss";
//import assets
import logo from "../../assets/logo.svg";
//import icon
import { BsFillPersonFill } from "react-icons/bs";

const Nav = (props) => {
  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className={style.nav}>
      <div className={style.logo_container}>
        <Link to="/store/browse">
          <img className={style.logo} src={logo} alt="" />
        </Link>
      </div>
      <div className={style.dropdown_container}>
        {localStorage.getItem("token") ? (
          <>
            <button className={style.username}>
              <BsFillPersonFill className={style.username_icon} />
              <span className={style.username_text}>{props.username}</span>
            </button>
            <div className={style.dropdown_ul_wrapper}>
              <ul className={style.dropdown_ul}>
                <li className={style.dropdown_li}>
                  <NavLink
                    className={style.nav_link}
                    activeClassName={style.nav_link_active}
                    to="/store/account">
                    Account
                  </NavLink>
                </li>
                <li className={style.dropdown_li}>
                  <NavLink
                    className={style.nav_link}
                    activeClassName={style.nav_link_active}
                    to="/store/coupon">
                    Coupons
                  </NavLink>
                </li>
                <li className={style.dropdown_li}>
                  <NavLink
                    className={style.nav_link}
                    activeClassName={style.nav_link_active}
                    to="/store/wishlist">
                    Wishlist
                  </NavLink>
                </li>
                <li className={style.dropdown_li}>
                  <NavLink
                    className={style.nav_link}
                    to="#"
                    onClick={handleLogout}>
                    Sign Out
                  </NavLink>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <Link to="/auth/login" className={style.username}>
            <BsFillPersonFill className={style.username_icon} />
            <span className={style.username_text}>Log in</span>
          </Link>
        )}
      </div>
    </nav>
  );
};

Nav.propTypes = {
  username: PropTypes.string,
};

Nav.defaultProps = {
  username: "User",
};

export default Nav;
