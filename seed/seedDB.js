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
    image: "https://open.umn.edu/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBMQT09IiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--41149392b97959e0d6f4e08a0cfcc495568b6090/9781946135131.png",
    name: "Psychology 101 Textbook",
    points: 10,
    description: "Professor Freud's class is excellent"
  },
  {
    image: "https://cdn.shopify.com/s/files/1/1928/9661/products/Preveo_Alpha_Four_24_Kids_Bike_Silver_Profile.jpg?v=1535512440",
    name: "Bike",
    points: 20,
    description: "Very well-loved, but still has some life in it!"
  },
  {
    image: "https://images-na.ssl-images-amazon.com/images/I/81WdhSXQ1eL._SL1500_.jpg",
    name: "Nutribullet",
    points: 10,
    description: "Great for smoothies on the way to class"
  },
  {
    image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-wifi-select-spacegray-201803_GEO_US?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1538434015990",
    name: "iPad",
    points: 50,
    description: "Needs to be reset, but great for notes in class"
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


