import React, { Component } from "react";
import "./style.css";

class LoginForm extends Component {
  state = {
    email: "",
    password: "",
  };

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.email === "" || this.state.password === "") {
      return alert("You must provide your email and password.")
    }
    if (this.state.password.length < 6) {
      return alert("Your password must be at least 6 characters long.")
    }

    this.setState({
      email: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form className="form">
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
          <button onClick={this.handleFormSubmit}>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
