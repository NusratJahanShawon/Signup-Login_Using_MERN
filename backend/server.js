import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";
// import postRoutes from "./routes/postRoutes.js";  

dotenv.config();
const app = express();

// ✅Enable CORS (Only one instance is needed)
app.use(cors({
  origin: "http://localhost:3000", // Change this if frontend runs on a different port
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"], 
}));

// ✅ Middleware
app.use(express.json());

// ✅ Debugging Middleware (Logs incoming requests)
app.use((req, res, next) => {
  console.log(`📌 Received request: ${req.method} ${req.path}`);
  next();
});

// ✅ Routes
app.use("/api/users", userRoutes);
// app.use("/api/posts", postRoutes);

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
    process.exit(1);
  });


// ✅ Start Server
const PORT = process.env.PORT || 3000;
app.listen(3000, () => console.log(`🚀 Server running on port ${PORT}`));

mongoose.connection.once("open", async () => {
  try {
    await mongoose.connection.db.collection("users").dropIndex("username_1");
    console.log("✅ Dropped conflicting index on 'username'");
  } catch (err) {
    if (err.codeName === "IndexNotFound") {
      console.log("ℹ️ Index 'username_1' not found, skipping...");
    } else {
      console.error("❌ Error dropping index:", err);
    }
  }
});
