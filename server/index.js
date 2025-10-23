import express from "express";

import dotenv from "dotenv"
import cors from "cors";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, () => {
    console.log(`server runing port is http://localhost${process.env.PORT}`);

})