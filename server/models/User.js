// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   // name: { type: String, required: true },
//   email: { type: String, required: true },
//   password: { type: String, required: true },
//   // role: { type: String, enum: ["admin", "employee"], required: true },
//   // profileImage: { type: String },
//   // createAt: { type: Date, default: Date.now },
//   // updateAt: { type: Date, default: Date.now },
// });

// export default mongoose.model("User", userSchema);

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export default mongoose.model("User", userSchema);
