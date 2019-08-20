import React, { Component } from "react";
import People from "../components/People";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";


class Products extends Component {
  state = {
    users: [],
    objects: []
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

  handleOnClick = () => {
    console.log(this.id)
    console.log("clicked")
  }

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
      {this.state.users.map(user=>{
        return <Card user={user} key={user._id}>
        </Card>
      })}

      {this.state.objects.map(object=>{
        return <Card product={object} key={object._id} id={object._id} onClick={this.handleOnClick()}>
        </Card>
      })}
      
    </div>
    );
  }
}
export default Products;
