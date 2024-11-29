import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const navigate = useNavigate()
  return (
    <div>
      <div className="bg-slate-500  flex items-center justify-between px-4 h-12">
        <div>
          <button className="text-white">Home</button>
        </div>

        <div>
          <button onClick={() => navigate("/Login")} className="text-white mr-4">Login</button>
          <button onClick={()=>navigate('/SignUp')} className="text-white">Sign Up</button>    
        </div>
      </div>
      <div className="flex" >
        <img
          src="./images/pngtree-portfolio-displays-and-mobile-apps-with-3d-shapes-chat-messages-and-image_3879137.jpg"
          alt="Local Image"        
          className="w-1/2 h-full object-cover"
        />
        <img
          src="/images/pngtree-d-rendered-mobile-apps-software-and-portfolio-frames-with-messaging-and-image_3879135.jpg"
          alt="local Image"
          className="w-1/2 h-full"
        />
      </div>
      <div className="bg-black  h-52"></div>
    </div>
  );
};

export default HomePage;
