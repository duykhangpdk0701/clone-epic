import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import * as color from "../style/color";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/loginActions";

const DropMenu = () => {
  const linkActive = { color: color.textWhileActive };
  const user = useSelector((state) => state.login.user);
  const dispatch = useDispatch();

  const handleSignOut = async () => {
    dispatch(logout());
  };

  return (
    <UlContainer>
      <UserNameContainer>
        <FaUserAlt />
        <span>{user.userNames}</span>
      </UserNameContainer>
      <ul>
        <li>
          <NavLink activeStyle={linkActive} className="li-a" to="/account">
            Account
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={linkActive} className="li-a" to="/redeemCode">
            Redeem code
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={linkActive} className="li-a" to="/coupons">
            Coupons
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={linkActive} className="li-a" to="/wishlist">
            Wishlist
          </NavLink>
        </li>
        <li>
          <button onClick={handleSignOut}>Sign out</button>
        </li>
      </ul>
    </UlContainer>
  );
};

const UlContainer = styled.div`
  height: 100%;
  margin-right: 20px;
  position: relative;
  cursor: pointer;
  padding: 0 20px;
  width: 140px;

  ul {
    position: absolute;
    color: ${color.textWhileNonActive};
    background-color: ${color.secondaryBlack};
    width: 140px;
    top: 52px;
    right: 0;
    text-align: center;
    opacity: 0;
    pointer-events: none;
    height: 160px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 10px;
    transition: all 0.1s ease;

    li {
      font-size: 13px;

      a,
      button {
        color: ${color.textWhileNonActive};
        font-size: 13px;
        transition: all 0.1s ease;

        :hover {
          color: ${color.textWhileActive};
          transition: all 0.1s ease;
        }
      }

      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
  }

  :hover ul {
    opacity: 1;
    pointer-events: all;
    transition: all 0.1s ease;
  }
`;

const UserNameContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${color.textWhileActive};

  span {
    margin-left: 10px;
  }
`;
export default DropMenu;
