import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";

function Home() {
  return (
    <div>
      <Hero />
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>About</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Users can exchange their unused items without exchange money.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
