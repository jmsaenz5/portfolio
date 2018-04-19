import React, { Component } from "react";
import Bio from "../../components/main/Bio";
import Footer from "../../components/footer";
import { Col, Row, Container } from "../../components/Grid";
import ConnectWindow from "../../components/connect";
import Button from "../../components/Tab";
import Form from "../../components/Form";

class Main extends Component {
  state = {
    page: <Bio />,
    name: "",
    phone: "",
    email: "",
    comments: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log("hello", this.state.name);
  };

  formTab = event => {
    event.preventDefault();
    this.setState({
      page: (
        <Form
          handleInputChange={this.handleInputChange}
          name={this.state.name}
          phone={this.state.phone}
          email={this.state.email}
          comments={this.state.comments}
        />
      )
    });
  };

  // portTab = event => {
  //   event.preventDefault();
  //   this.setState({
  //     page: Portfolio
  //   })
  // }

  aboutTab = event => {
    event.preventDefault();
    this.setState({
      page: <Bio />
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Button id="tab1" onClick={this.aboutTab}>
            About Me
          </Button>
          <Button id="tab2">Portfolio</Button>
          <Button id="tab3" onClick={this.formTab}>
            Contact
          </Button>
        </Row>
        <Row>
          <Col size="md-8">{this.state.page}</Col>
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
