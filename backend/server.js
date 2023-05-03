import express from "express";
import Database from "./Database/index.js";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/index.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const Nodeserver = async () => {
  Database();
  app.use(cors());
  app.use(express.json());
  app.use(router());

  try {
    app.listen(PORT, () => {
      console.log(`Server is live on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("error in server connection", error.message);
  }
};
Nodeserver();
