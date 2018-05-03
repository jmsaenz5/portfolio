import React, { Component } from "react";
import axios from "axios";
import Bio from "../../components/main/Bio";
import Footer from "../../components/footer";
import { Col, Row, Container } from "../../components/Grid";
import ConnectWindow from "../../components/connect";
import Button from "../../components/Tab";
import Form from "../../components/Form";
import Portfolio from "../../components/Port";

class PortPage extends Component {
  constructor() {
    super();
    this.state = {
      page: Portfolio,
      name: "",
      phone: "",
      email: "",
      comments: ""
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("hello", this.state);
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, phone, email, comments } = this.state;
    const form = await axios.post("/contact", {
        name,
        phone,
        email,
        comments
    })
    .then(
      this.setState({
        name: "",
        phone: "",
        email: "",
        comments: ""
      })
    );
  };

  formTab = event => {
    event.preventDefault();
    this.setState({
      page: Form
    });
  };

  portTab = event => {
    event.preventDefault();
    this.setState({
      page: Portfolio
    });
  };

  aboutTab = event => {
    event.preventDefault();
    this.setState({
      page: Bio
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Button id="tab1" onClick={this.aboutTab}>
            About Me
          </Button>
          <Button id="tab2" onClick={this.portTab}>
            Portfolio
          </Button>
          <Button id="tab3" onClick={this.formTab}>
            Contact
          </Button>
        </Row>
        <Row>
          <Col size="md-8">
            <this.state.page
              handleInputChange={this.handleInputChange}
              handleSubmit={this.handleSubmit}
              name={this.state.name}
              phone={this.state.phone}
              email={this.state.email}
              comments={this.state.comments}
            />
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

export default PortPage;
