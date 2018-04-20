import React from "react";

const Form = props => (
  <div className="content content-main">
    <h2 className="title content">Contact</h2>
    <form className="content-main">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={props.name}
          className="form-control contact"
          onChange={props.handleInputChange}
          name="name"
          autoFocus
        />
        <label htmlFor="phone">Phone</label>
        <input
          type="tel"
          value={props.phone}
          className="form-control contact"
          onChange={props.handleInputChange}
          name="phone"
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={props.email}
          className="form-control contact"
          onChange={props.handleInputChange}
          name="email"
        />
        <label htmlFor="comments">Message</label>
        <textarea
          className="form-control contact"
          rows="5"
          name="comments"
          value={props.comments}
          onChange={props.handleInputChange}
        />
        <button className="btn btn-primary submit">Submit</button>
      </div>
    </form>
  </div>
);

export default Form;
