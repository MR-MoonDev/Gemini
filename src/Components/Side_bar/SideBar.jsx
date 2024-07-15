import React, { useState } from "react";
import { assets } from "../../assets/assets";

const SideBar = () => {
  const [extendsidebar,setextendsidebar] = useState(false);
  return (
    // parent div 

    <div className="bg-blue-500 px-3 h-screen flex flex-col justify-between w-full md:w-max text-white">
      {/* upper menu */}
      <div className="inline-flex flex-col space-y-5 mt-5">
        <div className="text-4xl mb-10 cursor-pointer">
          <assets.IoMdMenu onClick={()=>{setextendsidebar(prev=>!prev)}} />    
        </div>
        <div className="flex items-center bg-blue-700 rounded-3xl p-3 justify-evenly cursor-pointer hover:bg-blue-600 transition">
          <assets.FaPlus /> {extendsidebar? <p>New Chat</p>:null}
        </div>
         {extendsidebar?
        <div className="mt-10">
        <p className="text-lg font-semibold">Recent</p>
        <div className="flex items-center gap-3 mt-3 p-1 rounded-md hover:bg-blue-600 transition">
          <assets.FiMessageSquare />
          <p>There is a recent chat</p>
        </div>
      </div>:null 
        }
        
      </div>
      {/* lower menu */}
      <div className="mb-5 space-y-5">
        <div className="flex items-center text-md gap-3 cursor-pointer hover:text-blue-300 transition">
          <assets.FaQuestion />
        
        {extendsidebar?<p>Help</p>:null}  
        </div>
        <div className="flex items-center text-md gap-3 cursor-pointer hover:text-blue-300 transition">
          <assets.IoCompassOutline />
        
        {extendsidebar?<p>Activity</p>:null}  
        </div>
        <div className="flex items-center text-md gap-3 cursor-pointer hover:text-blue-300 transition">
          <assets.IoSettingsOutline />
        
        {extendsidebar?<p>Settings</p>:null}  
        </div>
      </div>
    </div>
  );
};

export default SideBar;
