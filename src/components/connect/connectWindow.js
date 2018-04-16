import React from "react";


const ConnectWindow = () => (
  <nav>
    <section>
      <h2 className="headline">Connect With Me</h2>
      <div className="row linkBox">
      <a href="https://www.linkedin.com/in/jasonmsaenz/" className="col-md-3" target="_blank" rel="noopener noreferrer">
          <img 
            className="logo"
            id="git"
            src={require("./logos/In-2C-66px-TM.png")}
            alt="Linkedin"
          />
        </a>
        <a href="https://github.com/jmsaenz5" className="col-md-3" target="_blank" rel="noopener noreferrer">
          <img 
            className="logo"
            id="linked"
            src={require("./logos/GitHub-Mark-64px.png")}
            alt="GitHub"
          />
        </a>
        <a href="https://stackoverflow.com/users/8468477/jmsaenz5?tab=profile" className="col-md-3" target="_blank" rel="noopener noreferrer">
          <img 
            className="logo"
            id="stack"
            src={require("./logos/so-icon.png")}
            alt="Stack Overflow"
          />
        </a>
      </div>
    </section>
  </nav>
);

export default ConnectWindow;
