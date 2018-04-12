import react from "react";

const connectWindow = () => (
  <nav>
    <h2>Connect With Me</h2>
    <div className="row">
      <a href="https://www.linkedin.com/in/jasonmsaenz/">
        <img
          className="logo"
          id="git"
          src="../../assets/logos/linkedin.png"
          alt="Linkedin"
          target="_blank"
        />
      </a>
      <a href="https://github.com/jmsaenz5">
        <img
          className="logo"
          src="../../assets/logos/github.png"
          alt="GitHub"
          target="_blank"
        />
      </a>
      <a href="https://stackoverflow.com/users/8468477/jmsaenz5?tab=profile">
        <img
          className="logo"
          src="../../assets/logos/stack.png"
          alt="Stack Overflow"
          target="_blank"
        />
      </a>
    </div>
  </nav>
);

export default connectWindow;
