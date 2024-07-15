import React from "react";
import { assets } from "../../assets/assets";
const InputBox = () => {
  return (
    <div className="flex justify-between items-center gap-2 ">
      <input
        type="text"
        placeholder="Enter prompt here"
        className="w-full p-2"
      />
      <div className="flex  justify-evenly  text-2xl gap-2">
        <assets.GrGallery />
        <assets.CiMicrophoneOn />
        <assets.IoMdSend />
      </div>
    </div>
  );
};

export default InputBox;
