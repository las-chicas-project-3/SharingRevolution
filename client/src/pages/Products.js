import React, { Component } from "react";
import People from "../components/People";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

class Products extends Component {
  state = {
    image: "",
    name: "Bike",
    points: 50,
    owner: "Mafalda"
  };
  render() {
    return (
      <div>
        <People />
        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Products</h1>
            </Col>
          </Row>
          <Row>
            <Col size="md-12">

            </Col>
          </Row>
        </Container>
        <Card image={this.state.image} name={this.state.name} points={this.state.points} owner={this.state.owner}/>
      </div>
    );
  }
}
export default Products;
