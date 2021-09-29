import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
//import features
import Browse from "../browse";
import Discover from "../discover";
import Wishlist from "../wishlist";
import Product from "../product";
//import  header
import Nav from "../../components/header/Nav";
//import components
import Footer from "../../components/footer";

const Dicegames = () => {
  const match = useRouteMatch();

  return (
    <>
      <Nav />
      <Switch>
        <Route path={`${match.url}/browse`} component={Browse} />
        <Route path={`${match.url}/discover`} component={Discover} />
        <Route path={`${match.url}/wishlist`} component={Wishlist} />
        <Route path={`${match.url}/product/:id`} component={Product} />
      </Switch>
      <Footer />
    </>
  );
};

export default Dicegames;
