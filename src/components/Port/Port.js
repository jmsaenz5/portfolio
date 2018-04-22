import React from "react";
import Project from "./Project";
import { Col, Row, Container } from "../Grid";

const Portfolio = () => (
  <Project>
    <div className="content content-main">
      <Container>
        <Row>
          <Col size="md-4">
            <h5 className="projectTitle bamazon">Node.js & MySQL</h5>{" "}
            <a
              href="https://github.com/jmsaenz5/bamazon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="projectImage"
                src={require("../../assets/images/bamazon.png")}
                alt="Bamazon Project"
              />
            </a>
          </Col>
          <Col size="md-5">
          <h5 className="projectTitle hangman">JavaScript Hangman Game</h5>
          <a href="https://jmsaenz5.github.io/Hangman-Game/" target="_blank"
              rel="noopener noreferrer">
              <img className="projectImage hangman" src={require("../../assets/images/hangman.png")} alt="Hangman Game" />
              </a>
          </Col>
        </Row>
      </Container>
    </div>
  </Project>
);

export default Portfolio;
