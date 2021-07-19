import React from "react";
import { Route } from "react-router-dom";
import NavbarMain from "./NavbarMain";
import NavbarSemi from "./NavbarSemi";

const FullNavRoute = ({ exact, path, component: Component }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <NavbarMain />
          <NavbarSemi />
          <Component {...props} />
        </div>
      )}
    />
  );
};

const NavRoute = ({ exact, path, component: Component }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) => (
        <div>
          <NavbarMain />
          <Component {...props} />
        </div>
      )}
    />
  );
};

export { FullNavRoute, NavRoute };
