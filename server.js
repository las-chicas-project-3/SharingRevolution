const express = require("express");
var db = require("./models");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
var morgan = require('morgan');
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;
app.use(morgan("combined"));

const passport= require("passport")
const User = require("./routes");

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("user/build"));
}

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);
// Routes

//app.use("/", User);
app.use("/api/users", User);


// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SharingRevolution");




// app.get("/api/user", function (req, res) {
//   db.User.find({})
//     .then(function (dbClient) {
//       console.log(dbClient)
//       res.json(dbClient);
//     })
//     .catch(function (err) {
//       res.json(err);
//     })
// });

// app.get("/api/objects", function (req, res) {
//   db.Object.find({})
//     .then(function (dbObject) {
//       console.log(dbObject)
//       res.json(dbObject);
//     })
//     .catch(function (err) {
//       res.json(err);
//     })
// });



// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

