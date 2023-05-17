import express from "express";
import { airlineUsersControllerPost } from "../Controllers/airlineController.js";
import allUserdataGetREq from "../Controllers/AlluserDataGet.js";
import airlineSearchGetReq from "../Controllers/airlineSearchControllerGetReq.js";
import { CheckToken } from "../middlewares/validateToken.js";
import { airlineDeleteReq } from "../Controllers/AirlinedleteReq.js";
import { airlineUpdateReq } from "../Controllers/airlineUpdatReq.js";
const router = express.Router();
const AirLineUserRouter = () => {
  router.post("/airline", airlineUsersControllerPost);
  router.get("/airline", CheckToken, allUserdataGetREq);
  router.get("/airline/:search", airlineSearchGetReq);
  router.delete("/airline/:delete", airlineDeleteReq);
  router.put("/airline/update/:id", airlineUpdateReq);

  return router;
};
export default AirLineUserRouter;
