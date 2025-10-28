import mongoose from "mongoose";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import User from "./models/User.js";
import connectToDatabase from "./database.js"; // 👈 match the export

dotenv.config();

const userRegister = async () => {
  try {
    await connectToDatabase();

    const hashedPassword = await bcrypt.hash("password123", 10);
    const user = new User({
      name: "Admin",
      email: "admin@example.com",
      password: hashedPassword,
    });
    await user.save();

    console.log("✅ User seeded successfully!");
    process.exit(0);
  } catch (error) {
    console.error("❌ Error seeding user:", error);
    process.exit(1);
  }
};

userRegister();
