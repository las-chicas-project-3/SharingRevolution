import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Signup from "./components/auth/Register"; --JB coded out 906pm
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";
import { Provider } from "react-redux";
import store from "./store";
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

class App extends Component {

  state = {
    clients: [],
    objects: []
  }

  componentDidMount() {
    this.getUserFromDb();
    this.getObjectFromDb();
  }

  componentDidUpdate(){
  }

  getUserFromDb = () => {
    API.getUser().then(res=>this.setState({user:res.data}))
  };


  getObjectFromDb = () => {
    API.getObject().then(res=>this.setState({objects:res.data}))
  };

  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={() => <Products info={this.state} />}/>
            <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
