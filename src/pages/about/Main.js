import React, { Component } from "react";
import AboutHead from "../../components/main/AboutHead";
import Bio from "../../components/main/Bio";
import Footer from "../../components/footer";

class Main extends Component {
  render() {
    return (
      <div>
        <AboutHead />
        <div className="row">
          <Bio id="bio" />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Main;
