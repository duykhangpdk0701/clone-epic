import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import style from "./Nav.module.scss";
//import assets
import logo from "../../assets/logo.svg";
import UserIcon from "../../assets/svgComponents/UsersIcon";

const Nav = (props) => {
  return (
    <nav className={style.nav}>
      <div className={style.logo_container}>
        <Link to="/product/browse">
          <img className={style.logo} src={logo} alt="" />
        </Link>
      </div>
      <div className={style.dropdown_container}>
        <Link to="#" className={style.username}>
          <UserIcon />
          <span className={style.username_text}>{props.username}</span>
        </Link>
        <ul className={style.dropdown_ul}>
          <li className={style.dropdown_li}>
            <Link to="/product/account">Account</Link>
          </li>
          <li className={style.dropdown_li}>
            <Link to="/product/coupon">Coupons</Link>
          </li>
          <li className={style.dropdown_li}>
            <Link to="/product/wishlist">Wishlist</Link>
          </li>
          <li className={style.dropdown_li}>
            <Link to="/product/sign out">Sign Out</Link>
          </li>
        </ul>
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
