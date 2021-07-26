import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Content from "../components/layout/content/Content";
import Menu from "../components/layout/menu/Menu";

import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Content />
      </Router>
    </div>
  );
};

export default App;
