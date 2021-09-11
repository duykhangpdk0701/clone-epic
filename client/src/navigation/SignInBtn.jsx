import React from "react";
import styled from "styled-components";
import { FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignInBtn = () => {
  return (
    <SignInContainer as={Link} to="/login">
      <FaUserAlt />
      <span>Sign In</span>
    </SignInContainer>
  );
};

const SignInContainer = styled.button`
  width: 140px;
  height: 100%;
  display: flex;
  margin-right: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 10px;
  }
`;

export default SignInBtn;
