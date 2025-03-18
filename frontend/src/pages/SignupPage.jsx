import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      console.log("Response Data:", data);

      if (response.ok) {
        setSuccessMessage("✅ Signup successful! Redirecting to login...");
        setTimeout(() => navigate("/login"), 2000);
      } else {
        alert(`❌ Signup failed: ${data.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Signup error:", error);
      alert("❌ Something went wrong!");
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
      style={{ backgroundImage: "url('https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg')" }}
    >
      {successMessage && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-3 px-6 rounded-lg shadow-lg text-center">
          {successMessage}
        </div>
      )}
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-500 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <div className="mb-6">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-2 rounded-lg hover:from-blue-600 hover:to-purple-700 transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 cursor-pointer hover:underline"
          >
            Log in
          </span>
        </p>
      </div>
    </div>
  );
}

export default SignupPage;
