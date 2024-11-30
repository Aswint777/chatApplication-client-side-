import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ChatPage from "./pages/ChatPage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>  
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/chats" Component={ChatPage} />
          <Route path="/SignUp" Component={SignUpPage}/>
          <Route path="/Login" Component={LoginPage}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
