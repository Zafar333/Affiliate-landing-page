import express from "express";
import { HotelUserSchema } from "../Database/auth/HotelSchema.js";
export const hotelUsersControllerPost = async (req, res) => {
  try {
    const {
      firstname,
      lastname,
      phonenumber,
      state,
      zipcode,
      age,
      check,
      email,
    } = req.body;
    if (
      firstname &&
      lastname &&
      email &&
      phonenumber &&
      state &&
      zipcode &&
      age &&
      check
    ) {
      const hotelData = new HotelUserSchema({
        firstname,
        lastname,
        email,
        phonenumber,
        state,
        zipcode,
        age,
        check,
      });
      const saveUser = await hotelData.save();
      res.status(200).json({
        status: 200,
        msg: "data save sucessfully",
        hoteldata: saveUser,
      });
    } else {
      res.status(401).json({ msg: "please send valid data" });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
