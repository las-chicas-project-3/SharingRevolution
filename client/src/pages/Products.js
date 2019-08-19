import React, { Component } from "react";
import People from "../components/People";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";

class Products extends Component {
  state = {
    clients: [],
    objects: ["banana"]
  }

  componentDidMount = () => this.setState(this.props.info)
  // getClientFromDb = () => {
  //   fetch('http://localhost:3000/api/clients')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({ clients: res.data }));
  // };

  componentDidUpdate = () => console.log(this.state)

  // getObjectFromDb = () => {
  //   fetch('http://localhost:3000/api/objects')
  //     .then((data) => data.json())
  //     .then((res) => this.setState({ objects: res.data }));
  // };

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
      {this.state.clients.map(client=>{
        return <Card client={client} key={client._id}>}></Card>
      })}

      {this.state.objects.map(object=>{
        return <Card product={object} key={object._id}>}></Card>
      })}
      
    </div>
    );
  }
}
export default Products;
