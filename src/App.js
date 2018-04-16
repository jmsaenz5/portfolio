import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/about";
// import Contact from "./pages/contact";
// import Portfolio from "./pages/portfolio";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </div>
  </Router>
);

export default App;
