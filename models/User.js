const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: { type: String, min: 3, max: 17, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, min: 6, max: 46, required: true },
});

const UserModel = new mongoose.model("users", userSchema);
module.exports = { UserModel };
