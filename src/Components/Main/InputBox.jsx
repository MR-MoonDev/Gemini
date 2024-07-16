import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { context } from "../../Context/Context";

const InputBox = () => {
  const { setinput, input, onsend } = useContext(context);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onsend();
    }
  };

  return (
    <div className="flex items-center gap-2 p-2 bg-gray-100 rounded-lg shadow-md">
      <input
        type="text"
        placeholder="Enter prompt here"
        className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onChange={(e) => setinput(e.target.value)}
        value={input}
        onKeyPress={handleKeyPress}
      />
      <div className="flex items-center gap-2 text-2xl text-gray-500">
        <assets.GrGallery className="cursor-pointer hover:text-gray-700 transition-colors duration-300" />
        <assets.CiMicrophoneOn className="cursor-pointer hover:text-gray-700 transition-colors duration-300" />
        <assets.IoMdSend
          className="cursor-pointer text-blue-500 hover:text-blue-700 transition-colors duration-300"
          onClick={() => onsend()}
        />
      </div>
    </div>
  );
};

export default InputBox;
