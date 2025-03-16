import express from "express";
import Post from "../models/PostModel.js";

const userId = req.user.id; // ✅ Get user ID from authMiddleware
const router = express.Router();

// ✅ Create a New Post
router.post("/", async (req, res) => {
  try {
    const { title, content, category } = req.body;
    const newPost = new Post({ title, content, category });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: "Error creating post", error });
  }
});

// ✅ Fetch All Posts
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: "Error fetching posts", error });
  }
});

// ✅ Fetch a Single Post by ID
router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ message: "Error fetching post", error });
  }
});

// ✅ Update a Post by ID
router.put("/:id", async (req, res) => {
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!updatedPost) return res.status(404).json({ message: "Post not found" });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: "Error updating post", error });
  }
});

// ✅ Delete a Post by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) return res.status(404).json({ message: "Post not found" });
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting post", error });
  }
});

router.post("/", authMiddleware, async (req, res) => {
    try {
      const { title, content, category } = req.body;
      
      if (!req.user || !req.user.id) {  // ✅ Ensure user is attached
        return res.status(401).json({ message: "Unauthorized: No user found" });
      }
  
      const userId = req.user.id; // ✅ Get user ID from decoded token
  
      if (!title || !content || !category) {
        return res.status(400).json({ message: "All fields are required" });
      }
  
      const newPost = new Post({ title, content, category, user: userId }); // ✅ Include user
      await newPost.save();
  
      return res.status(201).json(newPost);
    } catch (error) {
      console.error("❌ Error creating post:", error);
      return res.status(500).json({ message: "Error creating post", error });
    }
  });
  
export default router;
