import React, { useEffect, useRef, useState, useMemo } from "react";
import { NavLink, useHistory } from "react-router-dom";
import queryString from "query-string";
//import style
import style from "./SubNav.module.scss";
//import redux
import { useDispatch } from "react-redux";
import { getCountWishlistByUserIdSync } from "../../../app/wishlistsSlice";
import { useSelector } from "react-redux";
//import icon from react icon
import { FiSearch } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const SubNav = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const countWishlist = useSelector((state) => state.wishlists.count);
  const [search, setSearch] = useState("");
  const typingTimeoutRef = useRef(null);

  const urlParams = useMemo(
    () =>
      queryString.parse(history.location.search, {
        arrayFormat: "bracket-separator",
        arrayFormatSeparator: "|",
      }),
    [history.location.search],
  );

  useEffect(() => {
    const fetchCountWishList = () => {
      const userId = localStorage.getItem("userId");
      const action = getCountWishlistByUserIdSync({ userId });
      dispatch(action);
    };

    fetchCountWishList();
    return;
  }, [dispatch]);

  const handleSearchBtn = (e) => {
    console.log("hello my name is Khang");
    console.log(history.location.pathname);
  };

  const handleOnchangeInputSearch = (e) => {
    const value = e.target.value;
    setSearch(e.target.value);

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    typingTimeoutRef.current = setTimeout(() => {
      if (value !== "") {
        history.replace({
          pathname: "/store/browse",
          search: queryString.stringify(
            { ...urlParams, q: value },
            { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
          ),
        });
      } else {
        delete urlParams.q;
        history.replace({
          pathname: "/store/browse",
          search: queryString.stringify(
            { ...urlParams },
            { arrayFormat: "bracket-separator", arrayFormatSeparator: "|" },
          ),
        });
      }
    }, 500);
  };

  const handleCancelSearching = () => {
    setSearch("");
  };

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
            <div className={style.counter_span_container}>
              <span className={style.counter_span}>{countWishlist}</span>
            </div>
          </div>
        </div>
        <div className={style.search_bar_wrapper}>
          <button className={style.search_btn} onClick={handleSearchBtn}>
            <FiSearch />
          </button>
          <input
            value={search}
            onChange={handleOnchangeInputSearch}
            placeholder="Search"
            className={style.search_input}
            type="text"
          />

          {search !== "" ? (
            <button className={style.close_btn} onClick={handleCancelSearching}>
              <AiOutlineClose />
            </button>
          ) : (
            ""
          )}
        </div>
      </nav>
    </div>
  );
};

export default SubNav;
