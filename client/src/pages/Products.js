import React, { Component } from "react";
import People from "../components/People";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import API from "../utils/API"


class Products extends Component {
  state = {
    users: [],
    objects: [],
    userId: 0,
    result: 0
  }

  //This.props.user will be updated with the current user that is log in
  buyOnClick = (price) => (event) => {
    event.preventDefault();
    
    let userPoints = this.props.info.user[0].points 
    let userId = this.props.info.user[0]._id
    let result = userPoints - price

    console.log("userId =" + userId)
    console.log("Price of the product = " + price)
    console.log("Points of the user = " + this.props.info.user[0].points)
    console.log(userPoints + "-" + price + "=" + result)
    
    console.log("user id =" + userId)
    console.log(typeof userId)
    
    console.log("result stringify =" + result)
    console.log(typeof result)

    API.updateUser(userId, result)
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
        {this.state.users.map(user => {
          return <Card user={user} key={user._id}>

          </Card>
        })}

        {this.state.objects.map(object => {
          return <Card product={object} key={object._id} id={object._id} onClick={this.buyOnClick(object.points)}>
          </Card>
        })}

      </div>
    );
  }
}
export default Products;
