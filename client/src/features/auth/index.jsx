import React from "react";
import { Route, useRouteMatch, Switch } from "react-router-dom";
//import auth
import Login from "./Login";
import Register from "./Register";

const Auth = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.url}/login`} component={Login} />
      <Route path={`${match.url}/register`} component={Register} />
    </Switch>
  );
};

export default Auth;
