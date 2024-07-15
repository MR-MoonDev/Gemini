import React from "react";
import { assets } from "../../assets/assets";
import { context } from "../../Context/Context";
import { useContext } from "react";

const InputBox = () => {
  const{setinput,input,onsend}=useContext(context)

  return (
    <div className="flex justify-between items-center gap-2 ">
      <input
        type="text"
        placeholder="Enter prompt here"
        className="w-full p-2" 
        onChange={(e)=>setinput(e.target.value)} value={input}
      />
      <div className="flex  justify-evenly  text-2xl gap-2">
        <assets.GrGallery />
        <assets.CiMicrophoneOn />
        <assets.IoMdSend  onClick={()=>onsend()}/>
      </div>
    </div>
  );
};

export default InputBox;
