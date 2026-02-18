import mongoose from "mongoose";

const userMongoose = mongoose.Schema({
  full_name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  phone: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female", "Other"],
    require: true,
  },
  picture: {
    type: String,
  },
});


const Connect = mongoose.model("student", userMongoose);

export default Connect