import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import "../style/global.scss";

import Calendario from "../pages/Calendario";
import Materias from "../pages/Materias";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Materias" component={Materias} />
        <Route path="/Calendario" component={Calendario} />
      </Switch>
    </Router>
  );
};
export default Routes;
