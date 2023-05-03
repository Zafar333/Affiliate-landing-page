import express from "express";
import AirLineUserRouter from "./AirlineUserrouter.js";
const router = express.Router();

const route = () => {
  router.use("/airline", AirLineUserRouter());
  return router;
};
export default route;
