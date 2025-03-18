// const mongoose = require("mongoose");

// const userSchema = mongoose.Schema(
//   {
//     name: { type: String, required: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//   },
//   { timestamps: true }
// );

// const User = mongoose.model("User", userSchema);
// module.exports = User;

// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// export default User; // ✅ Correct ES Module export

// const User = mongoose.model("User", userSchema);

// module.exports = User;


// ========================
// import mongoose from "mongoose";

// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   password: String,
// });

// const User = mongoose.model("User", userSchema);

// export default User; // ✅ Correct ES Module export
// ======================
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true }, // Ensure uniqueness is only on email
  password: { type: String, required: true, minlength: 6 },
});

const User = mongoose.model("User", userSchema);
export default User;

