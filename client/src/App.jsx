import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.scss";
//import features
import Auth from "./features/auth";
import Dicegames from "./features/dicegames";
//import page
import CounterPage from "./page/CounterPage";
import HelloPage from "./page/HelloPage";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HelloPage} exact />
        <Route path="/store" component={Dicegames} />
        <Route path="/counter" component={CounterPage} />
        <Route path="/auth" component={Auth} />
      </Switch>
    </Router>
  );
};

export default App;
