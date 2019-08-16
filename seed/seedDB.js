const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/SharingRevolution"
);

const clientSeed = [
  {
    name: "Joyce",
    password: "catsamazing",
    date: new Date(Date.now())
  },
  {
    name: "Caroline",
    password: "cinamonmypassion",
    date: new Date(Date.now())
  },
  {
    name: "Mafalda",
    password: "typostar",
    date: new Date(Date.now())
  }
];

db.Client
  .remove({})
  .then(() => db.Client.collection.insertMany(clientSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });