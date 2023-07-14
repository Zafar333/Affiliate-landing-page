import express from "express";
import { airlineUserSchema } from "../Database/auth/UserSchema.js";

export const airlineUsersControllerPost = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      phonenumber,
      state,
      zipcode,
      flightDestination,
      check,
      email,
    } = req.body;
    if (firstname && lastname && email && phonenumber && check) {
      const airlineData = new airlineUserSchema({
        firstname,
        lastname,
        email,
        phonenumber,
        state,
        zipcode,
        flightDestination,
        check,
      });
      const saveUser = await airlineData.save();

      res.json({ status: 200, msg: "data save sucessfully" });
    } else {
      res.json({ status: 401, msg: "please send valid data" });
    }
  } catch (error) {
    res.status(500).json({ status: 500, msg: error.message });
  }
};
