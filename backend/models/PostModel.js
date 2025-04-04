import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true }, // ✅ Link Post to User
  },
  { timestamps: true }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
