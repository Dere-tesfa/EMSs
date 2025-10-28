import mongoose from "mongoose";
const registrationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});
const registrationModul = mongoose.model("Users", registrationSchema);
export default registrationModul;
