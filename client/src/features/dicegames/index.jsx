import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
//import features
import Browse from "../browse";
import Discover from "../discover";
//import components
import Nav from "../../components/header/Nav";

const Dicegames = () => {
  const match = useRouteMatch();

  return (
    <>
      <Nav />
      <Switch>
        <Route path={`${match.url}/browse`} component={Browse} />
        <Route path={`${match.url}/discover`} component={Discover} />
      </Switch>
    </>
  );
};

export default Dicegames;
