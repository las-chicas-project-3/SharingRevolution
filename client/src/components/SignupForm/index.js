import React, { Component } from "react";
import "./style.css";

class SignupForm extends Component {
  constructor() {
    super();
  this.state = {
    name: "",
    email: "",
    password: "", 
    password2: "",
  errors: {}
  };
}

  handleInputChange = name => event => {
    const { value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // if (this.state.name === "" || this.state.email === "") {
    //   return alert("You must provide first name and email.")
    // }
    // if (this.state.password.length < 6) {
    //   return alert("Your password must be at least 6 characters long.")
    // }

    // alert(`Hello ${this.state.name}!`);
    this.setState({
      name: "",
      email: "",
      password: "",
      password2: ""
    });
  };

  render() {
    return (
      <div>
        <p>
          Hello, {this.state.name}
        </p>
        <form className="form">
          <input
            value={this.state.name}
            onChange={this.handleInputChange("name")}
            type="text"
            placeholder="Name"
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
             <input
            value={this.state.password2}
            onChange={this.handleInputChange("password2")}
            type="password2"
            placeholder="Confirm Password"
          />
                  <button onClick={this.handleFormSubmit}>Signup</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
