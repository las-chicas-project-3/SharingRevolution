import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
// import Signup from "./components/auth/Register"; --JB coded out 906pm
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import API from "./utils/API";

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
      <Router>
        <div>
          <Navbar />
          <Wrapper>
            <Route exact path="/" component={Home} />
            <Route exact path="/products" component={() => <Products info={this.state} />}/>
            <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          </Wrapper>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
