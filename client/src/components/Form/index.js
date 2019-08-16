import React, { Component } from "react";
import "./style.css";

class Form extends Component {
  // Setting the component's initial state
  state = {
    firstName: "",
    lastName: "",
    password: ""
  };

  handleInputChange = name => event => {
    // Getting the value and name of the input which triggered the change
    const { value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    if (this.state.firstName === "" || this.state.lastName === "") {
      return alert("You must provide first name and last name.")
    }
    if (this.state.password.length < 6) {
      return alert("Your password must be at least 6 characters long.")
    }

    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    alert(`Hello ${this.state.firstName} ${this.state.lastName}`);
    this.setState({
      firstName: "",
      lastName: "",
      password: ""
    });
  };

  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            onChange={this.handleInputChange("firstName")}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.lastName}
            onChange={this.handleInputChange("lastName")}
            type="text"
            placeholder="Last Name"
          />
          <input
            value={this.state.password}
            onChange={this.handleInputChange("password")}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default Form;
