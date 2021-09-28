import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
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
            <Link to="#" className={style.username}>
              <BsFillPersonFill />
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
                <Link to="#" onClick={handleLogout}>
                  Sign Out
                </Link>
              </li>
            </ul>
          </>
        ) : (
          <Link to="/auth/login" className={style.username}>
            <BsFillPersonFill />
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
