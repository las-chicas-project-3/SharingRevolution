const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/SharingRevolution"
);


//User
const userSeed = [
  {
    name: "Joyce",
    password: "catsamazing",
    points: 40,
    date: new Date(Date.now()),
    objects: [{
      name: "Back cracker",
      points: 10,
      description: "Stick that will crack your",
    }]
  },
  {
    name: "Caroline",
    password: "cinnamonmypassion",
    points: 40,
    date: new Date(Date.now())
  },
  {
    name: "Mafalda",
    password: "typostar",
    points: 40,
    date: new Date(Date.now())
  }
];

//Object
const objectSeed = [
  {
    name: "Reusable Cup",
    points: 10,
    description: "Reuse it on Starbucks"
  },
  {
    name: "Iphone charger",
    points: 10,
    description: "When running out of battery is there to help"
  }
];



db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.User
  .remove({})
  .then(() => db.Object.collection.insertMany(objectSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


