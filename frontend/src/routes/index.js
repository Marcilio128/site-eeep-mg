import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import "../style/global.scss";

import Boletim from "../pages/Boletim";
import Materias from "../pages/Materias";
import Perfil from "../pages/Perfil";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Perfil" component={Perfil} />
        <Route path="/Materias" component={Materias} />
        <Route path="/Boletim" component={Boletim} />
      </Switch>
    </Router>
  );
};
export default Routes;
