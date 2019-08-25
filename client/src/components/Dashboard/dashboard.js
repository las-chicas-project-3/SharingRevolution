import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

import People from "../People";
import Row from "../Row";
import Col from "../Col";
import Container from "../Container";
import Card from "../Card";
import API from "../../utils/API";
import JumboTron from "../JumbotronUser";

class Dashboard extends Component {

  state = {
    objects: []
  }

  componentDidMount() {
    this.getObjectFromDb();
  }


  getObjectFromDb = () => {
    API.getObject().then(res => this.setState({ objects: res.data }))
  };


  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div >
        <People />
        <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
            marginTop: "1rem"
          }}
          onClick={this.onLogoutClick}
          className="btn btn-large waves-effect waves-light hoverable blue accent-3"
        >
          Logout
            </button>
        <JumboTron name={user.name.split(" ")[0]} points={user.points}>
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
