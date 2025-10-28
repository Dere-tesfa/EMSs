import express from "express";
import registrationModul from "../models/userRegister.js";
import bcrypt from "bcrypt";
const router = express.Router();
router.post("/", async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists
  const existingUser = await registrationModul.findOne({ email });
  if (existingUser)
    return res.status(400).json({ error: "User already registered!" });

  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Create user
  const user = new registrationModul({
    name,
    email,
    password: hashedPassword,
  });

  const saveUser = await user.save();
  if (!saveUser)
    return res.status(500).json({ error: "Failed to register user!" });
  res
    .status(201)
    .json({ message: "User registered successfully!", user: saveUser });
});
export default router;
