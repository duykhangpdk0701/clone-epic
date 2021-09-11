import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import DropMenu from "./DropMenu";
import SignInBtn from "./SignInBtn";
import { FaDice } from "react-icons/fa";
import { secondaryBlack, textWhileActive } from "../style/color";

const NavbarMain = () => {
  const isLogged = useSelector((state) => state.login.isLogin);

  return (
    <Nav>
      <LogoContainer as={Link} to="/">
        <FaDice className="logo-icon" />
        <h1 className="logo-text">DiceGames</h1>
      </LogoContainer>
      {isLogged ? <DropMenu /> : <SignInBtn />}
    </Nav>
  );
};

const Nav = styled.nav`
  position: sticky;
  top: 0;
  width: 100%;
  background-color: ${secondaryBlack};
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3%;
  z-index: 10;
`;

const LogoContainer = styled.a`
  display: flex;
  height: 100%;
  align-items: center;
  color: ${textWhileActive};

  .logo-icon {
    font-size: 25px;
  }

  h1 {
    font-size: 13px;
    text-transform: uppercase;
    font-weight: 800;
    margin-left: 5px;
  }
`;

export default NavbarMain;
