import express from "express";
import airlineUserSchema from "../Database/auth/UserSchema.js";

export const airlineUsersControllerPost = async (req, res) => {
  const { firstname, lastname, phonenumber, state, zipcode, age, check } =
    req.body;
  try {
    const { firstname, lastname, phonenumber, state, zipcode, age, check } =
      req.body;
    if (
      firstname &&
      lastname &&
      phonenumber &&
      state &&
      zipcode &&
      age &&
      check
    ) {
      const airlineData = new airlineUserSchema({
        firstname,
        lastname,
        phonenumber,
        state,
        zipcode,
        age,
        check,
      });
      const saveUser = await airlineData.save();
      res
        .status(200)
        .json({ status: 200, msg: "data save sucessfully", data: saveUser });
    } else {
      res.status(401).json({ msg: "please send valid data" });
    }
  } catch (error) {
    res.status(500).json(error.stack);
    console.log("i am catch your data not save");
  }
};
