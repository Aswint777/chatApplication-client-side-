import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../redux/reducer/UserSlice";

const LoginPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 


  const { user, error, loading } = useSelector((state) => state.user);

  // Redirect to homepage after successful login
  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  // Handle form submission
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(userLogin({ email, password }));
  };

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
          <button onClick={() => navigate("/Login")} className="text-white mr-4">
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
        <form onSubmit={handleLogin}>
          <div
            className="border-2 bg-slate-200 w-full max-w-lg mx-auto rounded-xl p-6 sm:p-8"
            style={{
              backgroundImage: "url('./images/pexels-photo-235985.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-center text-2xl font-semibold mb-6">Sign In</h1>
            {loading && <p className="text-blue-500">Logging in...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-black">Email</p>
            <input
              className="w-full h-10 rounded-lg mb-6 p-3"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <p className="text-black">Password</p>
            <div className="relative w-full">
              <input
                className="w-full h-10 rounded-lg mb-6 p-3 pr-10"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              {/* Toggle Button */}
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg"
                disabled={loading}
              >
                {loading ? "Loading..." : "Sign In"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
