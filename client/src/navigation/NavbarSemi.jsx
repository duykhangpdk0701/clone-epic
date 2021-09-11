import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { GrFormClose } from "react-icons/gr";
import * as color from "../style/color";
import { useDispatch, useSelector } from "react-redux";
import { searchProducts } from "../redux/actions/productsActions";

const NavbarSemi = () => {
  const dispatch = useDispatch();
  const [resultSearch, setResultSearch] = useState("");
  const linkActive = { color: color.textWhileActive, cursor: "default" };
  const amountOfWishlist = useSelector((state) => state.wishlist.length);

  const handleSearchBar = (e) => {
    setResultSearch(e.target.value);
    dispatch(searchProducts(e.target.value));
  };

  const handleDeleteSearchBar = (e) => {
    setResultSearch("");
    dispatch(searchProducts(""));
  };

  return (
    <SemiNav>
      <SemiNavContainer>
        <SemiNavLeftContainer>
          <div className="semi-nav-link-left">
            <SemiNavLink as={NavLink} activeStyle={linkActive} exact to="/">
              Discover
            </SemiNavLink>
            <SemiNavLink as={NavLink} activeStyle={linkActive} to="/browse">
              Browse
            </SemiNavLink>
          </div>
          <div className="semi-nav-link-right">
            <SemiNavLink as={NavLink} activeStyle={linkActive} to="/wishlist">
              Wishlist
            </SemiNavLink>
            <WishlistCountContainer>
              <div className="wishlist-notification"></div>
              <span>{amountOfWishlist}</span>
            </WishlistCountContainer>
          </div>
        </SemiNavLeftContainer>
        <SemiNavRightContainer>
          <RiSearchLine className="search-icon" />

          {resultSearch !== "" ? (
            <GrFormClose
              className="close-icon"
              onClick={handleDeleteSearchBar}
            />
          ) : (
            ""
          )}
          <input
            placeholder="Search"
            type="text"
            onChange={handleSearchBar}
            value={resultSearch}
          />
        </SemiNavRightContainer>
      </SemiNavContainer>
    </SemiNav>
  );
};

const SemiNav = styled.nav`
  position: sticky;
  top: 52px;
  height: 100px;
  z-index: 9;
  background-color: ${color.primaryBlackOpacity};
`;

const SemiNavContainer = styled.div`
  width: 75%;
  margin: auto;
  display: flex;
  height: 100%;
`;

const SemiNavLeftContainer = styled.div`
  flex-basis: calc(100% - 245px);
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .semi-nav-link-right {
    display: flex;
  }

  .semi-nav-link-left {
    a:nth-child(2) {
      margin-left: 10px;
    }
  }
`;

const WishlistCountContainer = styled.div`
  margin: 0 25px 0 8px;
  height: 20px;
  width: 40px;
  border-radius: 15px;
  background-color: ${color.secondaryBlack};
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    font-weight: 600;
    color: ${color.textWhileNonActive};
    cursor: default;
  }
`;

const SemiNavRightContainer = styled.div`
  position: relative;
  flex-basis: 245px;
  display: flex;
  justify-content: center;
  align-items: center;

  .search-icon {
    position: absolute;
    transform: translateX(-50%);
    left: 20px;
  }

  .close-icon {
    position: absolute;
    transform: translateX(-50%);
    right: 0;
    cursor: pointer;

    path {
      stroke: ${color.textWhileActive};
    }
  }

  input {
    flex-basis: 100%;
    height: 41px;
    background-color: ${color.secondaryBlack};
    border: none;
    outline: none;
    color: ${color.textWhileActive};
    padding: 0 40px;
    font-weight: 500;
  }
`;

const SemiNavLink = styled.a`
  color: ${color.textWhileNonActive};
  font-weight: 600;
  transition: all 0.15s ease;

  :hover {
    color: ${color.textWhileActive};
    transition: all 0.15s ease;
  }
`;

export default NavbarSemi;
