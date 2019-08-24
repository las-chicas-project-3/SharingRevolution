//Require packages 
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const passport = require("./config/passport");
const morgan = require('morgan');
const routes = require("./routes");
const app = express();

const PORT = process.env.PORT || 8080;
app.use(morgan("combined"));

// Define middleware 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SharingRevolution");


app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

