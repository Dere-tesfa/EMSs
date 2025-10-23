import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const login = async (req, res) => {
  const user = await User.findOne({ email });
  if (!user) {
    res.status(404).json("notFound!");
  }

  const isMatch = await bcrypt.compare(Password, user.password);
  if (!isMatch) {
    res.status(404).json("wrrong password!");
  }
  const token = jwt.sign(
    { _id: user._id, role: user.role },
    process.env.JWT_KEY,
    { expiresIn: "10d" }
  );
  res.status(200).json({
    success: true,
    token,
    user: { id: user._id, name: user.name, role: user.role },
  });
};
