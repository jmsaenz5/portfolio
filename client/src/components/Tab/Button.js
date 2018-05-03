import React from "react";

const Button = props => (
    <button {...props} className="btn tab">{props.children}</button>
)

export default Button;