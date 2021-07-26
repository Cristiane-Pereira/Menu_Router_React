import React from "react";
import { Switch, Route } from "react-router-dom";

import About from "../../../views/exemplos/About";
import Home from "../../../views/exemplos/Home";
import NotFound from "../../../views/exemplos/NotFound";
import Parm from "../../../views/exemplos/Param";

import "./Content.css";

const Content = (props) => {
  return (
    <main className="Content">
      <Switch>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/param/:id">
          <Parm />
        </Route>
        <Route exact path="*">
          <NotFound />
        </Route>
      </Switch>
    </main>
  );
};

export default Content;
