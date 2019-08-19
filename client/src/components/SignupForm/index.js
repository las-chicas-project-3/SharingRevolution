import React, { Component } from "react";
import "./style.css";

class SignupForm extends Component {
  state = {
    firstName: "",
    email: "",
    password: "",
    points: 100
  };

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.firstName === "" || this.state.email === "") {
      return alert("You must provide first name and email.")
    }
    if (this.state.password.length < 6) {
      return alert("Your password must be at least 6 characters long.")
    }

    alert(`Hello ${this.state.firstName}!`);
    this.setState({
      firstName: "",
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello {this.state.firstName}
        </p>
        <form className="form">
          <input
            value={this.state.firstName}
            onChange={this.handleInputChange("firstName")}
            type="text"
            placeholder="First Name"
          />
          <input
            value={this.state.email}
            onChange={this.handleInputChange("email")}
            type="text"
            placeholder="Email"
          />
          <input
            value={this.state.password}
            onChange={this.handleInputChange("password")}
            type="password"
            placeholder="Password"
          />
          <p>Starting points: {this.state.points}</p>
          <button onClick={this.handleFormSubmit}>Signup</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
