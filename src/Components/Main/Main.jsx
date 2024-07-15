import React from "react";
import { assets } from "../../assets/assets";
import MainHeading from "./MainHeading";
import SuggestedBox from "./SuggestedBox";
import InputBox from "./InputBox";

const Main = () => {
  return (
    // parent 
    <div className="w-full h-screen">   
      <div className="flex items-center justify-between text-3xl mx-4 mt-5">
        Gemini
        <assets.FcBusinessman className="rounded-full bg-blue-700" />
      </div>
      {/* child */}
      <div className="flex justify-center  items-center flex-col gap-10 p-4">
        <div className="w-full max-w-screen-lg  p-4 rounded ">
          <MainHeading />
        </div>
        <div className="w-full max-w-screen-lg  p-4 mt-4 rounded ">
          <SuggestedBox />
        </div>
        <div className="w-full max-w-screen-lg  p-4 mt-8 rounded-2xl shadow-md border ">
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default Main;
