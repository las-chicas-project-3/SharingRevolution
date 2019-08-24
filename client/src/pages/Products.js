import React, { Component } from "react";
import People from "../components/People";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import API from "../utils/API"
import JumboTron from "../components/JumbotronUser";


class Products extends Component {
  state = {
    objects: [],
    users: [],
    user: []
  }

  componentDidMount = () => {
    console.log(this.props)
  };


  buyOnClick = (event) => {
    event.preventDefault();
    // Ask the user if he wants to do it
    API.getObjectId(event.target.id).then(res => {
      if (res.data[0].points <= this.state.currentUser.points) {
        alert("You can buy")
        API.updateUser({
          userId: this.state.currentUser,
          obj: res.data[0]
        }).then(function () {
          window.location.reload()
        })
      } else {
        alert("You don't have enough money")
      }
    })
  }

  componentDidUpdate = () => console.log(this.state)

  render() {
    return (
      <div>
        <People />

        <JumboTron name={"stranger"} points={"1000000"}>
        </JumboTron>


        <Container style={{ marginTop: 30 }}>
          <Row>
            <Col size="md-12">
              <h1>Our current products:</h1>
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
