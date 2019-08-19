import React, { Component } from "react";
import Container from "../components/Container";
import LoginForm from "../components/LoginForm";

class Login extends Component {

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Login</h1>
        <LoginForm />
        </Container>
      </div>
    );
  }
}

export default Login;
