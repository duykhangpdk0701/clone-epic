import { useEffect, useState } from "react";

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
import Product from "./components/product/Index";
//import color
import { primaryBlack } from "./style/color";
//redux
import { getLogin } from "./redux/actions/loginActions";
import { fetchWishlist } from "./redux/actions/wishlistActions";
import { useDispatch, useSelector } from "react-redux";
import productApi from "./api/productApi";
import firebase from "firebase/compat/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";

//config firebase
const config = {
  apiKey: "AIzaSyB7ZdtyD2HH1MjnxHDjpWpsg3FvNprVZHw",
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
};
const firebaseApp = firebase.initializeApp(config);

const App = () => {
  const [listProduct, setListProduct] = useState([]);
  const dispatch = useDispatch();
  // const userId = useSelector((state) => state.login.user.ids);

  useEffect(() => {
    const localStorageUsername = localStorage.getItem("username");
    const localStoragePassword = localStorage.getItem("password");

    if (localStorageUsername) {
      const username = localStorageUsername;
      const password = localStoragePassword;
      getLogin(dispatch, username, password);
    }
  }, [dispatch]);

  useEffect(() => {
    const auth = getAuth(firebaseApp);
    const unregisterObserver = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.log("User is not logged in");
        return;
      }
      console.log("Logged in user: " + user.displayName);
      const token = await user.getIdToken();
      console.log("Logged in user: " + token);
    });
    return () => unregisterObserver();
  });

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const res = await productApi.getAll();
        setListProduct(res.data);
        console.log(res);
      } catch (error) {
        console.log("Failed to fetch product lists " + error);
      }
    };
    fetchProductList();
  }, []);

  // useEffect(() => {
  //   fetchWishlist(dispatch, userId);
  // }, [dispatch, userId]);

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
          <FullNavRoute path="/product/:id" component={Product} />
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
