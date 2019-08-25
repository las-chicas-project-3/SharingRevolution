import React, { Component } from "react";
import People from "../components/People";
import Row from "../components/Row";
import Card from "../components/Card";
import API from "../utils/API"
import JumboTron from "../components/JumbotronUser";


class Products extends Component {
  state = {
    users: [],
    objects: [],
    currentUser: [],
    objectPrice: 0,
    userPoints: 0
  }

  componentDidMount = (res) => {
    console.log("Res from Products.js: " + res);
    this.setState(this.props.info)
    //Check the user is the one he says it is
    API.getUserId({ id: "5d6194980064704d823e10da" })
      .then(data => {
        if (data.data[0]) {
          this.setState({ currentUser: data.data[0] })
        } else {
          window.location.replace("/login");
        }
      })
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

  render() {
    return (
      <div>
        <People />
        <JumboTron name={this.state.currentUser.name} points={this.state.currentUser.points}>
        </JumboTron>

        <Row>
          {this.state.users.map(user => {
            return <Card user={user} key={user._id}>

            </Card>
          })}

          {this.state.objects.map(object => {
            return <Card product={object} key={object._id} id={object._id} onClick={this.buyOnClick}>
            </Card>
          })}
        </Row>


      </div>
    );
  }
}
export default Products;
