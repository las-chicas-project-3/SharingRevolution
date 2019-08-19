import React, { Component } from "react";
import Container from "../components/Container";
import SignupForm from "../components/SignupForm";

class Signup extends Component {

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Signup</h1>
        <SignupForm />
        </Container>
      </div>
    );
  }
}

export default Signup;
