const express = require("express");
var db = require("./models");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
//const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());



// Add routes, both API and view
//app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/SharingRevolution");


app.get("/api/clients", function (req, res) {
  db.Client.find({})
    .populate("Object")
    .then(function (dbClient) {
      console.log(dbClient)
      res.json(dbClient);
    })
    .catch(function (err) {
      res.json(err);
    })
});


app.post("/submit/:id", function(req, res) {
  db.Client.create(req.body)
    .then(function(dbObject) {
      console.log(dbClient)
      return db.Client.findOneAndUpdate({_id: req.params.id}, { $push: { objects: dbObject._id} }, { new: true });
    })
    .then(function(dbClient) {
      res.json(dbClient);
    })
    .catch(function(err) {
      res.json(err);
    });
});

// Start the API server
app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

