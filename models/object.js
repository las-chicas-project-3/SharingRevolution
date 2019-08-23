const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const objectSchema = new Schema({
  image: { type: String },
  name: { type: String, required: true },
  points: { type: Number},
  description: { type: String},
  date: { type: Date, default: Date.now }
});

const Object = mongoose.model("Object", objectSchema);

module.exports = Object;
