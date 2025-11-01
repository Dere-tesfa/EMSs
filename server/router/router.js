import express from "express";
import bcrypt from "bcrypt";
import User from "../models/User.js";

const router = express.Router();

// ✅ LOGIN ROUTE
router.post("/", async (req, res) => {
  try {
    // Step 1: Get user input
    const { email, password } = req.body;

    // Step 2: Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Step 3: Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    // Step 3: Check role (optional)
    if (user.role !== "admin" && req.query.role === "admin") {
      return res.status(403).json({ message: "Access denied — Admins only" });
    }
    // Step 4: Success response
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    // Step 5: Error handling
    res.status(500).json({
      message: "Server error",
      error: err.message,
    });
  }
});

export default router;
