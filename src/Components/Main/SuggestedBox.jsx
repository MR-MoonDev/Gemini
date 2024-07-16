import React from "react";
import { assets } from "../../assets/assets";

const suggestions = [
  {
    text: "Suggested beautiful places to see on an upcoming road trip",
    Icon: assets.IoCompassOutline,
  },
  {
    text: "Briefly summarize this concept: urban planning",
    Icon: assets.IoBulbOutline,
  },
  {
    text: "Brainstorm team bonding activities for our work retreat",
    Icon: assets.FiMessageSquare,
  },
  {
    text: "Improve the readability of the following code",
    Icon: assets.IoCodeSlash,
  },
];

const SuggestedBox = () => {
  return (
    <div className="flex gap-9 p-4  ">
      {suggestions.map(({ text, Icon }, index) => (
        <div
          key={index}
          className="p-4 border border-black rounded-lg  shadow-xl bg-blue-500 flex flex-col justify-between h-40 w-64 text-lg transition-transform transform hover:scale-105 hover:bg-blue-600"        >
          <p>{text}</p>
          <Icon className="self-end bg-blue-700 text-white rounded-full p-1 text-2xl" />
        </div>
      ))}
    </div>
  );
};

export default SuggestedBox;
