import express from "express";
import { adminLoginPostReq } from "../Controllers/adminController.js";
import { SuperAdminLoginPostReq } from "../Controllers/SuprAdmnLogin.js";

const router = express.Router();

function adminRouter() {
  router.post("/adminLogin", adminLoginPostReq);
  router.post("/superadminLogin", SuperAdminLoginPostReq);
  return router;
}
export default adminRouter;
