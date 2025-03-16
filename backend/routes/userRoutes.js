
// const express = require("express");
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const User = require("../models/User");

// const router = express.Router();

// // Register User
// router.post("/register", async (req, res) => {
//   const { name, email, password } = req.body;

//   // Check if user already exists
//   const userExists = await User.findOne({ email });
//   if (userExists) {
//     return res.status(400).json({ message: "User already exists" });
//   }

//   // Hash password
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   // Create user
//   const user = await User.create({ name, email, password: hashedPassword });

//   if (user) {
//     res.status(201).json({ message: "User registered successfully" });
//   } else {
//     res.status(400).json({ message: "Invalid user data" });
//   }
// });

// // Login User
// router.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await bcrypt.compare(password, user.password))) {
//     res.json({
//       _id: user.id,
//       name: user.name,
//       email: user.email,
//       token: jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//         expiresIn: "30d",
//       }),
//     });
//   } else {
//     res.status(401).json({ message: "Invalid email or password" });
//   }
// });

// module.exports = router;


import express from "express";
const router = express.Router();
import { signupUser, loginUser } from "../controllers/userController.js";
router.post("/signup", signupUser);
router.post("/login", loginUser);

export default router;

