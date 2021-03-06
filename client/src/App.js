import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/about";
import Contact from "./pages/contact";
import PortPage from "./pages/portfolio";
import "./App.css";
import { Col, Row, Container } from "./components/Grid";
import Name from "./components/Name";
import Nav from "./components/Nav";

const App = props => (
  <Router>
    <div>
      <div className="top">
        <Container>
          <Row>
            <Col size="md-4">
              <Name />
            </Col>
            <Col size="md-4" />
            <Col size="md-4">
              <Nav />
            </Col>
          </Row>
        </Container>
      </div>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={PortPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
