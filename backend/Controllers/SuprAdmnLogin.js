import express from "express";
import { superAdminSchema } from "../Database/auth/UserSchema.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const SuperAdminLoginPostReq = async (req, res) => {
  try {
    let key = process.env.SECRETKEY;
    const { username, password } = req.body;
    if (username && password) {
      var check = await superAdminSchema.findOne({ username, password });
      if (check) {
        jwt.sign({ id: check._id }, key, (err, token) => {
          if (err) return res.json({ msg: "something went wrong" });
          return res.json({
            status: 200,
            msg: "Login Successfully",
            token,
          });
        });
      } else {
        res.json({ status: 401, msg: "Your Email or password is incorrect" });
      }
    } else {
      res.json({ msg: "please send valid data" });
    }
  } catch (error) {
    res.json({ msg: error.message, status: 500 });
  }
};
