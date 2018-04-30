import React from "react";
import { Link} from "react-router-dom";

const Nav = props => (
  <div className="links">
   <Link className="high" to="/contact">
      Contact
    </Link>
    <p className="high divide"> | </p>
    <Link className="high" to="/portfolio">
      Portfolio
    </Link>
    <p className="high divide"> | </p>
    
    <Link className="high" to="/">
      About Me
    </Link>
  </div>
);

export default Nav;
