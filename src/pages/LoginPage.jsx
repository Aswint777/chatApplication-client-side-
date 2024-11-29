import React from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
  return (
    <div className="w-screen min-h-screen bg-black flex flex-col">
    {/* Navbar */}
    <div className="bg-slate-500 flex items-center justify-between px-4 h-12">
      <div>
        <button onClick={() => navigate("/")} className="text-white">
          Home
        </button>
      </div>
      <div>
        <button
          onClick={() => navigate("/Login")}
          className="text-white mr-4"
        >
          Login
        </button>
        <button onClick={() => navigate("/SignUp")} className="text-white">
          Sign Up
        </button>
      </div>
    </div>

    {/* Background Section */}
    <div className="flex-grow flex justify-center items-center">
      {/* Form Container */}
      <div
        className="border-2 bg-slate-200 w-full max-w-lg mx-auto rounded-xl p-6 sm:p-8"
        style={{
          backgroundImage: "url('./images/pexels-photo-235985.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-center text-2xl font-semibold mb-6">Sign In</h1>
        <p className="text-black">User Name</p>
        <input
          className="w-full h-10 rounded-lg mb-6 p-3"
          type="text"
          placeholder="Enter your username"
        />
        <p className="text-black">Email</p>
        <input
          className="w-full h-10 rounded-lg mb-6 p-3"
          type="email"
          placeholder="Enter your email"
        />
        <p className="text-black">Password</p>
        <input
          className="w-full h-10 rounded-lg mb-6 p-3"
          type="password"
          placeholder="Enter your password"
        />
        <p className="text-black">Confirm Password</p>
        <input
          className="w-full h-10 rounded-lg mb-6 p-3"
          type="password"
          placeholder="Confirm your password"
        />
        <div className="flex justify-end">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
            Submit
          </button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default LoginPage;
