import express from "express";
import autoRouter from "./server/router/router.js";
import userRegister from "./userSeed.js";
import dotenv from "dotenv";
import cors from "cors";
const app = express();
dotenv.config();
userRegister();
app.use(cors());
app.use(express.json());
app.use("/api/auto", autoRouter);

app.listen(process.env.PORT, () => {
  console.log(`server runing port is http://localhost${process.env.PORT}`);
});
