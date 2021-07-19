import { useEffect } from "react";

import "./style/style.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
//import navbar
import { FullNavRoute, NavRoute } from "./navigation/RouteNav";
//import component
import Discovery from "./components/discovery/Index";
import Account from "./components/Account";
import Wishlist from "./components/wishlist/Index";
import Coupons from "./components/Coupons";
import Browse from "./components/browse/Index";
import Login from "./pages/Login";
import Product from "./pages/Product";
//import color
import { primaryBlack } from "./style/color";
//redux
import { getLogin } from "./redux/actions/loginActions";
import { fetchWishlist } from "./redux/actions/wishlistActions";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const userId = useSelector((state) => state.login.user.ids);

  useEffect(() => {
    const localStorageUsername = localStorage.getItem("username");
    const localStoragePassword = localStorage.getItem("password");

    if (localStorageUsername) {
      const username = localStorageUsername;
      const password = localStoragePassword;
      getLogin(dispatch, username, password);
      console.log("hello my name is Khang");
    }
  }, [dispatch]);

  useEffect(() => {
    fetchWishlist(dispatch, userId);
  }, [dispatch, userId]);

  return (
    <Router>
      <Container className="App">
        <Switch>
          <FullNavRoute path="/" exact component={Discovery} />
          <FullNavRoute path="/browse" component={Browse} />
          <FullNavRoute path="/wishlist" component={Wishlist} />
          <FullNavRoute path="/coupons" component={Coupons} />
          <NavRoute path="/account" component={Account} />
          <Route path="/login" component={Login} />
          <NavRoute path="/product/:id" component={Product} />
        </Switch>
      </Container>
    </Router>
  );
};

const Container = styled.div`
  background-color: ${primaryBlack};
  min-height: 100vh;
`;

export default App;
