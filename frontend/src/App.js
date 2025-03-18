import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import LoginPage from "./pages/Loginpage";
import SignupPage from "./pages/SignupPage";
import UserDashboard from "./pages/Userdashboard";
import WritePost from "./pages/WritePost";

function App() {
  return (
    <Router>
      {/* <div className="text-center p-6"> */}
        {/* <h1 className="text-3xl font-bold text-blue-900">Welcome to My App</h1> */}
        {/* <nav className="mt-4"> */}
          {/* <Link to="/" className="mx-4 text-blue-500 underline">Home</Link>
          <Link to="/login" className="mx-4 text-blue-500 underline">Login</Link>
          <Link to="/signup" className="mx-4 text-blue-500 underline">Signup</Link> */}
        {/* </nav> */}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/Userdashboard" element={<UserDashboard />} />
          <Route path="/WritePost" element={<WritePost />} />
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
