import React, { Component } from "react";
import { Link } from "react-router-dom";
class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
    };
console.log(newUser);
  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.name}
                  error={errors.name}
                  id="name"
                  type="text"
                />
                <label htmlFor="name">Name</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Register;


// //Function to validate the signup
// module.exports = function validateRegisterInput(data) {
//   let errors = {};
//   // Convert empty fields to an empty string so we can use validator functions
//   data.name = !isEmpty(data.name) ? data.name : "";
//   data.email = !isEmpty(data.email) ? data.email : "";
//   data.password = !isEmpty(data.password) ? data.password : "";
//   data.password2 = !isEmpty(data.password2) ? data.password2 : "";
//   // Name checks
//   if (Validator.isEmpty(data.name)) {
//     errors.name = "Name field is required";
//   }
//   // Email checks
//   if (Validator.isEmpty(data.email)) {
//     errors.email = "Email field is required";
//   } else if (!Validator.isEmail(data.email)) {
//     errors.email = "Email is invalid";
//   }
//   // Password checks
//   if (Validator.isEmpty(data.password)) {
//     errors.password = "Password field is required";
//   }
//   if (Validator.isEmpty(data.password2)) {
//     errors.password2 = "Confirm password field is required";
//   }
//   if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
//     errors.password = "Password must be at least 6 characters";
//   }
//   if (!Validator.equals(data.password, data.password2)) {
//     errors.password2 = "Passwords must match";
//   }
//   return {
//     errors,
//     isValid: isEmpty(errors)
//   };
// };

