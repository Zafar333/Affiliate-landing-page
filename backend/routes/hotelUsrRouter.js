import express from "express";
import HotelSerachControolerGetReq from "../Controllers/hotelSerchControllerGetReq.js";
import { hotelUsersControllerPost } from "../Controllers/hotelcontrollerPostReq.js";
import hotelUsersControllerGetReq from "../Controllers/HotelUsrAllDataGet.js";
import { CheckToken } from "../middlewares/validateToken.js";
import { HoteldeleteReq } from "../Controllers/HotelDleteReq.js";
import { hotelUpdateReq } from "../Controllers/hotelUpdatReq.js";
const router = express.Router();
const hoteluserRouter = () => {
  router.post("/hotel", hotelUsersControllerPost);
  router.get("/hotel", CheckToken, hotelUsersControllerGetReq);
  router.get("/hotel/:search", HotelSerachControolerGetReq);
  router.delete("/hotel/:delete", HoteldeleteReq);
  router.put("/hotel/update/:id", hotelUpdateReq);

  return router;
};
export default hoteluserRouter;
