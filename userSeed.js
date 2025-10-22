import mongoose from "mongoose";
import bcrypt from "bcrypt";
import Users from "./models/User.js";
import dotenv from "dotenv";
dotenv.config();

const MONGO_URI = process.env.MONGO_URI;

const userRegister = async () => {
    try {

        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("✅ Connected to MongoDB");

        // ✅ Step 3: Hash the password
        const hashpassword = await bcrypt.hash("admin", 10);

        // ✅ Step 4: Create new admin user
        const newUser = new Users({
            name: "Admin",
            email: "admiaan@gmail.com",
            password: hashpassword,
            role: "Admin",
        });

        //Step 5: Save to DB
        await newUser.save();
        console.log("✅ Admin user created successfully!");

    } catch (error) {
        console.error(" Error seeding user:", error.message);
    }
};

userRegister();
