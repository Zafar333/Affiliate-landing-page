import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const Database = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGODB_URL, () => {
      console.log("i am Database connected");
    });
  } catch (error) {
    console.log("error in database connection", error.message);
  }
};
export default Database;
