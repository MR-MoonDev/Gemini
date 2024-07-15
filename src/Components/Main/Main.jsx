import React from "react";
import { assets } from "../../assets/assets";
import MainHeading from "./MainHeading";
import SuggestedBox from "./SuggestedBox";
import InputBox from "./InputBox";
import { useContext } from "react";
import { context } from "../../Context/Context";
const Main = () => {
  const {
    onsend,
    recetprompt,
    showResult,
    loading,
    resultdata,
    setinput,
    input,
  } = useContext(context);
  return (
    // parent
    <div className="w-screen h-screen">
      {/* child */}
      <div className=" flex justify-center items-center flex-col gap-10 p-4 h-screen">
        <div className="flex items-center justify-between w-full text-3xl ">
          Gemini
          <assets.FcBusinessman className="rounded-full size-10 bg-blue-700" />
        </div>
        {!showResult ? (
          <>
            <div className="w-full max-w-screen-lg p-4 rounded">
              <MainHeading />
            </div>
            <div className="w-full max-w-screen-lg p-4 mt-4 rounded">
              <SuggestedBox />
            </div>
          </>
        ) : (
          <div className="bg-red-3 w-full max-h-70vh overflow-y-scroll p-4 rounded px-10 text-justify no-scrollbar ">
            <div className="flex items-center gap-5 text-xl">
              <assets.FcBusinessman className="size-20 rounded-full bg-slate-200 p-2" />
              <p className="text-blue-500 font-bold">{recetprompt}</p>
            </div>
            <div>
              <assets.FaArrowsDownToLine  className="size-20 text-blue-500" />
              <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
            </div>
          </div>
        )}

        <div className=" w-full max-w-screen-lg p-4 mt-auto rounded-2xl shadow-md border">
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default Main;
