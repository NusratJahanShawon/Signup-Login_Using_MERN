import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// SIGNUP USER
export const signupUser = async (req, res) => {
  try {
    console.log("📌 Received data:", req.body); // ✅ Log incoming request body

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      console.log("❌ Missing Fields:", { name, email, password }); // ✅ Log missing fields
      return res.status(400).json({ message: "Please provide all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      console.log("❌ User already exists:", existingUser); // ✅ Log existing user check
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });

    await newUser.save();
    console.log("✅ User registered successfully:", newUser);

    res.status(201).json({ message: "User registered successfully", user: { name, email } });
  } catch (error) {
    console.error("❌ Error in signupUser:", error.message);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};



// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Please provide email and password" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    // Create a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(200).json({
      token,
      user: { id: user._id, name: user.name, email: user.email },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

