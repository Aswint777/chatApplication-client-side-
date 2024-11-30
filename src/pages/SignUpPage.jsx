import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "../redux/reducer/UserSlice";
// import { userSignUp } from "../features/userSlice";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);



  const dispatch = useDispatch();
  const { user, error, loading } = useSelector((state) => state.user);

  useEffect(() => {
    if (user) {
      navigate("/"); // Redirect to homepage or another page
    }
  }, [user, navigate]);
  
  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    dispatch(userSignUp({ userName, email, password }));
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
        <form onSubmit={handleSignUp}>
          <div
            className="border-2 bg-slate-200 w-full max-w-lg mx-auto rounded-xl p-6 sm:p-8"
            style={{
              backgroundImage: "url('./images/pexels-photo-235985.jpeg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className="text-center text-2xl font-semibold mb-6">Sign Up</h1>
            {loading && <p className="text-blue-500">Signing up...</p>}
            {error && <p className="text-red-500">{error}</p>}
            <p className="text-black">User Name</p>
            <input
              className="w-full h-10 rounded-lg mb-6 p-3"
              type="text"
              placeholder="Enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
            <p className="text-black">Email</p>
            <input
              className="w-full h-10 rounded-lg mb-6 p-3"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
 <p className="text-black">Password</p>
            <div className="relative mb-6">
              <input
                className="w-full h-10 rounded-lg p-3"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "🙈" : "👁️"} {/* Replace with your icons */}
              </button>
            </div>

            {/* Confirm Password */}
            <p className="text-black">Confirm Password</p>
            <div className="relative mb-6">
              <input
                className="w-full h-10 rounded-lg p-3"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <button
                type="button"
                className="absolute right-2 top-2 text-gray-600"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? "🙈" : "👁️"} {/* Replace with your icons */}
              </button>
            </div>
            <div className="flex justify-end">
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg">
                Create
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
