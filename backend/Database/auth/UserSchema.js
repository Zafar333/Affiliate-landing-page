import mongoose from "mongoose";

const userData = new mongoose.Schema({
  firstname: String,
  lastname: String,
  phonenumber: String,
  state: String,
  zipcode: String,
  age: String,
  check: Boolean,
});
export default mongoose.model("users", userData);
