import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaDice } from "react-icons/fa";
import * as colors from "../style/color";
import { Link, useHistory } from "react-router-dom";
import { postLogin } from "../redux/actions/loginActions";
import { useDispatch } from "react-redux";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [active, setActive] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    handleActive(username, password);
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await postLogin(dispatch, username, password).then(() => {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      history.goBack();
    });
  };

  const handleActive = (username, password) => {
    if (username !== "" && password !== "") {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Section>
      <Form>
        <Logo />
        <SignInDescription>
          Sign in with an dice games account
        </SignInDescription>
        <UsernameContainer>
          <Input
            onChange={handleUsername}
            placeholder="Email or Username"
            name="username"
            type="email"
          />
        </UsernameContainer>
        <PasswordContainer>
          <PasswordInput
            onChange={handlePassword}
            placeholder="Password"
            name="password"
            type="password"
          />
        </PasswordContainer>
        <ForgotPasswordContainer>
          <ForgotPassWordLink to="/forgotPassword">
            Forgot Your Password
          </ForgotPassWordLink>
        </ForgotPasswordContainer>
        <SubmitBtn
          active={active}
          className={active ? "submit-btn-active" : ""}
          onClick={handleSubmit}>
          Log In Now
        </SubmitBtn>
        <SignUpContainer>
          <span>Don't have an Dice Games account? </span>
          <Link to="/signUp">Sign Up</Link>
        </SignUpContainer>
      </Form>
    </Section>
  );
};

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  padding: 60px;
  background-color: ${colors.tertiaryBlack};
  width: 470px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Logo = styled(FaDice)`
  font-size: 70px;
  text-align: center;
`;

const SignInDescription = styled.h6`
  text-transform: uppercase;
  width: 100%;
  margin-top: 30px;
  pointer-events: none;
`;

const UsernameContainer = styled.div`
  width: 100%;
  margin-top: 15px;
  height: 50px;
`;

const PasswordContainer = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 15px;
  position: relative;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: ${colors.secondaryBlack};
  color: ${colors.textWhileActive};
  outline: none;
  border: none;
  padding: 0px 14px;
  border-radius: 5px;
`;

const PasswordInput = styled(Input)``;

const ForgotPasswordContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;
`;

const ForgotPassWordLink = styled(Link)`
  font-size: 13px;

  :hover {
    text-decoration: underline;
  }
`;

const SubmitBtn = styled.button`
  outline: none;
  border: none;
  border-radius: 5px;
  width: 100%;
  height: 50px;
  background-color: ${(props) =>
    props.active ? colors.primaryBlue : colors.secondaryBlack};
  color: ${(props) =>
    props.active ? colors.textWhileActive : colors.textWhileNonActive};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 11px;
  pointer-events: ${(props) => (props.active ? "all" : "none")};
  margin-top: 16px;
  transition: all 0.3s ease;
  cursor: pointer;
`;

const SignUpContainer = styled.div`
  width: 100%;
  margin-top: 35px;

  span {
    color: ${colors.textWhileNonActive};
    font-size: 13px;
    pointer-events: none;
  }

  a {
    font-size: 13px;

    :hover {
      text-decoration: underline;
    }
  }
`;

export default Login;
