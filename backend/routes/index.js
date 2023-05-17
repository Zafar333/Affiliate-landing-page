import express from "express";
import AirLineUserRouter from "./AirlineUserrouter.js";
import adminRouter from "./adminrouter.js";
import hoteluserRouter from "./hotelUsrRouter.js";
const router = express.Router();

const route = () => {
  router.use("/users", AirLineUserRouter());
  router.use("/auth", adminRouter());
  router.use("/users", hoteluserRouter());
  return router;
};
export default route;
