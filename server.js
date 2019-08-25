//Require packages 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("passport");
const users = require("./routes/api/users")
const object = require("./routes/api/object")

const morgan = require('morgan');
const app = express();

const PORT = process.env.PORT || 8080;
app.use(morgan("combined"));

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use("/api/users", users);
app.use("/api/object", object);


// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SharingRevolution");

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

