import React, { Component } from "react";
import Bio from "../../components/main/Bio";
import Footer from "../../components/footer";
import { Col, Row, Container } from "../../components/Grid";
import ConnectWindow from "../../components/connect";

class Main extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Bio id="bio" />
          </Col>
          <Col size="md-4">
            <ConnectWindow />
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Main;
