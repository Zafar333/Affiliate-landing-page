import express from "express";
import { airlineUsersControllerPost } from "../Controllers/airlineController.js";
const router = express.Router();
const AirLineUserRouter = () => {
  router.post("/users", airlineUsersControllerPost);
  return router;
};
export default AirLineUserRouter;
