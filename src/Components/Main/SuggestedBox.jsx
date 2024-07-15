import React from "react";
import { assets } from "../../assets/assets";

const SuggestedBox = () => {
  return (
    <div className="flex gap-5 p-4 ">
      <div className="p-4 border border-black rounded-lg bg-blue-500 flex flex-col justify-between h-40 w-64 text-lg">
        <p>Suggested beautiful places to see on an upcoming road trip</p>
        <assets.IoCompassOutline className="self-end bg-blue-900 text-white rounded-full p-1 text-2xl" />
      </div>
      <div className="p-4 border border-black rounded-lg bg-blue-500 flex flex-col justify-between h-40 w-64 text-lg">
        <p>Briefly summarize this concept: urban planning</p>
        <assets.IoBulbOutline className="self-end bg-blue-900 text-white rounded-full p-1 text-2xl" />
      </div>
      <div className="p-4 border border-black rounded-lg bg-blue-500 flex flex-col justify-between h-40 w-64 text-lg">
        <p>Brainstorm team bonding activities for our work retreat</p>
        <assets.FiMessageSquare className="self-end bg-blue-900 text-white rounded-full p-1 text-2xl" />
      </div>
      <div className="p-4 border border-black rounded-lg bg-blue-500 flex flex-col justify-between h-40 w-64 text-lg">
        <p>Improve the readability of the following code</p>
        <assets.IoCodeSlash className="self-end bg-blue-900 text-white rounded-full p-1 text-2xl" />
      </div>
    </div>
  );
};

export default SuggestedBox;
