import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')",
      }}
    >
      <div className="bg-white bg-opacity-80 p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Welcome to My Blogging Page
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          If you want to register, sign up here. If you already have an account, log in and enjoy blogging.
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => navigate("/signup")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Sign Up
          </button>
          <button
            onClick={() => navigate("/login")}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition duration-300"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
