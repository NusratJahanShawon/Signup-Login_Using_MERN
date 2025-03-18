import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Userdashboard() {
  const [posts, setPosts] = useState([]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    axios
      // .get("http://localhost:3000/api/posts")
      .then((res) => setPosts(res.data))
      .catch((err) => console.error("Error fetching posts:", err));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-400 to-blue-500">
      {/* Navbar */}
      <nav className="bg-gray-900 text-white py-4 flex justify-between px-6">
        <div className="text-2xl font-bold">Dashboard</div>
        <div className="space-x-4">
          <Link to="/WritePost" className="hover:text-gray-400">Add New Blogs</Link>
          <Link to="/pictures" className="hover:text-gray-400">Pictures</Link>
          <Link to="/travel" className="hover:text-gray-400">Travel Stories</Link>
        </div>
        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-gray-800 px-4 py-2 rounded-lg"
          >
            ⚙️
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-black shadow-lg rounded-lg">
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100">Profile</Link>
              <Link to="/settings" className="block px-4 py-2 hover:bg-gray-100">Settings</Link>
              <Link to="/logout" className="block px-4 py-2 text-red-600 hover:bg-gray-100">Logout</Link>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Welcome to Your Dashboard!
        </h1>
        <p className="text-center text-gray-600">Your previous posts and activities</p>

        {/* Displaying User's Previous Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div key={post._id} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold">{post.title}</h3>
                <p className="text-gray-600">{post.content}</p>
                <span className="text-sm text-gray-500">Category: {post.category}</span>
                <Link to={`/post/${post._id}`} className="text-blue-500 mt-2 block">
                  Read More
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center col-span-3">No previous posts found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Userdashboard;
