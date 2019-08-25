import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./store";

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
// import { setCurrentUser, logoutUser, registerUser, loginUser } from "./actions/authActions";
import { setCurrentUser, logoutUser } from "./actions/authActions";

import Home from "./pages/Home";
//import Products from "./pages/Products";
import Register from "./components/authorization/Register";
import Login from "./components/authorization/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/Dashboard/dashboard";


// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

// OLD CODE:
// // Check for token to keep user logged in
// if (localStorage.jwtToken) {
//   // Set auth token header auth
//   const token = localStorage.jwtToken;
//   setAuthToken(token);
//   // Decode token and get user info and exp
//   const decoded = jwt_decode(token);
//   // Set user and isAuthenticated
//   store.dispatch(setCurrentUser(decoded));
//   // Check for expired token
//   const currentTime = Date.now() / 1000; // to get in milliseconds
//   if (decoded.exp < currentTime) {
//     // Logout user
//     store.dispatch(logoutUser());
//     // Redirect to login
//     window.location.href = "./login";
//   }
// }

class App extends Component {

  // state = {
  //   objects: []
  // }

  // componentDidMount() {
  //   this.getObjectFromDb();
  // }

  // componentDidUpdate() {
  //   console.log("this.state.objects")
  //   console.log(this.state.objects)
  //   console.log(this.state)
  // }

  // getObjectFromDb = () => {
  //   API.getObject().then(res => this.setState({ objects: res.data }))
  // };

  // login = (userData) => {
  //   // return API.login(input).then(res=> {
  //   //   this.setState({user:res.user})
  //   //   console.log(res)
  //   //   return res}
  //   // ).catch(err=>{
  //   //   console.log(err)
  //   //   throw err
  //   // })

  // }


  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <Wrapper>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              {/* <Route exact path="/products" component={(props) => <Products {...props} info={this.state} />} />
              <Route exact path="/signup" component={(props) => <Signup {...props} signup={this.signup} />} />
              <Route exact path="/login" component={() => <Login login={this.login} />} /> */}
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
              </Switch>
            </Wrapper>
          </div>
        </Router>
        <Footer />
      </Provider>
    );
  }
}
export default App;
