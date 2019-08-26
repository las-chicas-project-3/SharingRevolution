import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import People from "../People";
import Row from "../Row";
import Card from "../Card";
import API from "../../utils/API";
import JumboTron from "../JumbotronUser";

class Dashboard extends Component {

  state = {
    objects: [],
    userLogIn: [],
    userLogInID: "",
    userLogInPoints: 0
  }

  componentDidMount() {
    this.getObjectFromDb();
    this.getUserFromDB()
  }

  getObjectFromDb = () => {
    API.getObject().then(res => this.setState({ objects: res.data }))
  };

  getUserFromDB = () => {
    this.setState({ userLogInID: this.props.auth.user.id })
    this.setState({ userLogInPoints: this.props.auth.user.points })

    API.getUserId(this.props.auth.user.id).then(res => {
      this.setState({
        userLogIn: res.data[0],
        userLogInPoints:res.data[0].points
      })
    })

  };

  componentDidUpdate = () => {
  }

  buyOnClick = (event) => {
    event.preventDefault();

    const userCurrent = this.state.userLogIn
    const objId = event.target.id

    API.getObjectId(objId).then(res => {
      if (res.data[0].points <= userCurrent.points) {
        let result = userCurrent.points - res.data[0].points
        this.setState({ userLogInPoints: result })
        API.updateUser({
          user: userCurrent,
          obj: res.data[0]
        }).then(function (res) {
          window.location.reload()
        })
      } else {
        alert("You don't have enough money")
      }
    })


  }


  render() {
    const { user } = this.props.auth;
    return (
      <div >
        <People />
        <JumboTron name={user.name.split(" ")[0]} points={this.state.userLogInPoints}>
        </JumboTron>

        <Row>
          {this.state.objects.map(object => {
            return <Card product={object} key={object._id} id={object._id} onClick={this.buyOnClick}>
            </Card>
          })}
        </Row>


      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  objects: state.objects
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);
