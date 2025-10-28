import express from "express";

import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import userRoute from "./router/router.js";
import registerRouter from "./router/registerRouter.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
// ✅ Step 1: connect to MongoDB Atlas
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB local connected"))
  .catch((err) => console.error(" MongoDB connection error:", err.message));

// ✅ Step 2: use your user routes
app.use("/login", userRoute);
app.use("/register", registerRouter);

// ✅ Step 3: start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
