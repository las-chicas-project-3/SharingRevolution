const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  points: { type: Number, default: 40 },
  objects:[
    {
      type: Schema.Types.ObjectId,
      ref: "Object"
    }
  ],
  date: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
