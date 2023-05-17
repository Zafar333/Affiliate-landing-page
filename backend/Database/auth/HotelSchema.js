import mongoose from "mongoose";

const HotelUserData = new mongoose.Schema(
  {
    firstname: String,
    lastname: String,
    phonenumber: String,
    state: String,
    zipcode: String,
    age: String,
    check: Boolean,
    universalLeadId: String,
    ipAddress: String,
    systime: String,
    email: String,
  },
  { timestamps: true }
);
export const HotelUserSchema = mongoose.model("HotelUsers", HotelUserData);
