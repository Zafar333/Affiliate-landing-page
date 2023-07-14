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
      countPerson,
      check,
      email,
    } = req.body;
    if (firstname && lastname && email && phonenumber && check) {
      const hotelData = new HotelUserSchema({
        firstname,
        lastname,
        email,
        phonenumber,
        state,
        zipcode,
        countPerson,
        check,
      });
      const saveUser = await hotelData.save();
      res.json({
        status: 200,
        msg: "data save sucessfully",
      });
    } else {
      res.json({ status: 401, msg: "please send valid data" });
    }
  } catch (error) {
    res.json({ status: 500, msg: error.message });
  }
};
