import mongoose from "mongoose";

const airlineUserData = new mongoose.Schema(
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
export const airlineUserSchema = mongoose.model("users", airlineUserData);

const adminData = new mongoose.Schema({
  username: String,
  password: String,
});

export const adminDataSchema = mongoose.model("admins", adminData);

const superAdminData = new mongoose.Schema({
  username: String,
  password: String,
});

export const superAdminSchema = mongoose.model("superadmins", superAdminData);
