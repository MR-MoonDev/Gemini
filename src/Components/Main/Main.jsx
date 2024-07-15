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
      <div className="flex justify-center items-center flex-col gap-10 p-4 h-screen">
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
          <div className="bg-red-3 w-full max-h-[70vh] overflow-y-scroll p-4 rounded px-10 text-justify no-scrollbar">
            <div className="flex items-center gap-5 text-xl">
              <assets.FcBusinessman className="size-20 rounded-full bg-slate-200 p-2" />
              <p className="text-blue-500 font-bold">{recetprompt}</p>
            </div>
            <div>
              <assets.FaArrowsDownToLine className="size-10 ml-4 mb-5 text-blue-500" />
              {loading ? (
                <div className="text-center">
                  <button
                    type="button"
                    className="bg-indigo-500 text-white font-bold py-2 px-4 rounded inline-flex items-center"
                    disabled
                  >
                    <svg
                      className="animate-spin h-5 w-5 text-white mr-3"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    Processing...
                  </button>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultdata }}></p>
              )}
            </div>
          </div>
        )}

        <div className="w-full max-w-screen-lg p-4 mt-auto rounded-2xl shadow-md border">
          <InputBox />
        </div>
      </div>
    </div>
  );
};

export default Main;
