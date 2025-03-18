// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function WritePost() {
//   const [title, setTitle] = useState("");
//   const [content, setContent] = useState("");
//   const [category, setCategory] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const newPost = {
//       title,
//       content,
//       category,
//     };

//     try {
//       await axios.post("http://localhost:3000/api/posts", newPost);
//       alert("Post created successfully!");
//       navigate("/"); // Redirect to the dashboard after submission
//     } catch (err) {
//       console.error("Error creating post:", err);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
//       <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
//         <h1 className="text-2xl font-bold mb-6 text-center">Write a New Post</h1>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-4">
//             <label className="block text-gray-700">Title</label>
//             <input
//               type="text"
//               value={title}
//               onChange={(e) => setTitle(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Content</label>
//             <textarea
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               rows="4"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-gray-700">Category</label>
//             <input
//               type="text"
//               value={category}
//               onChange={(e) => setCategory(e.target.value)}
//               className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default WritePost;