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
    currentUser: [],
    objectPrice: 0,
    userPoints: 0
  }

  // API.updateUser(userId, objectId)


  componentDidMount = () => {
    this.setState(this.props.info)
    //Check the user is the one he says it is
    API.getUserId({ id: "5d5dbd327952d76be05b70d4"})
      .then(data =>
        this.setState({ currentUser: data.data[0] })
      )
  };

  buyOnClick = (event) => {
    event.preventDefault();
    // Ask the user if he wants to do it
    API.getObjectId(event.target.id).then(res => {
      console.log(res.data[0].points)
      console.log("Current User: " + this.state.currentUser)

      if (res.data[0].points < this.state.currentUser.points) {
        console.log("You can buy")
        API.updateUser({
          userId: this.state.currentUser,
          obj: res.data[0]
        })
      } else {
        console.log("You don't have enough money")
      }
    })
  }

  componentDidUpdate = () => console.log(this.state)

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
          return <Card product={object} key={object._id} id={object._id} onClick={this.buyOnClick}>
          </Card>
        })}

      </div>
    );
  }
}
export default Products;
