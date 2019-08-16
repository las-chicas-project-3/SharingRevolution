import React, { Component } from "react";
import Container from "../components/Container";
import Form from "../components/Form";

class Signup extends Component {
  state = {
    firstname: "",
    lastname: [],
    email: [],
    password: ""
  };

  render() {
    return (
      <div>
        <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Signup</h1>
        <Form />
        </Container>
      </div>
    );
  }
}

export default Signup;
