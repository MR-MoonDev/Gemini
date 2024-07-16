import { createContext, useState } from "react";

// import run from "../config/Gimini"
import run from "../config/Gimini";
export const context = createContext();
const ContextProvider = (props) => {
  const [input, setinput] = useState("");
  const [recetprompt, setrecentprompt] = useState("");
  const [prevPrompt, setprevPromp] = useState([]);
  const [showResult, setshowResult] = useState(false);
  const [loading, setloading] = useState(false);
  const [resultdata, setresultdata] = useState("");
  const delaypara = (index, nextword) => {
    setTimeout(function () {
      setresultdata((prev) => prev + nextword);
    }, 75 * index);
  };
  const newChat =()=>{
    setloading(false);
    setshowResult(false);
  }
  const onsend = async (prompt) => {
    setresultdata("");
    setloading(true);
    setshowResult(true);
    let responce ;
    if(prompt !== undefined){
    responce = await  run(prompt);
    setrecentprompt(prompt);
    }
else{
  setprevPromp (prev=>[...prev,input])
  setrecentprompt(input);
  responce  = await run(input )
}
   
    let responseArray = responce.split("**");
    let newResponce =""
    for (let i = 0; i < responseArray.length; i++) {
      if (i === 0 || i % 2 !== 1) {
        newResponce += responseArray[i];
      } else {
        newResponce += "<b>" + responseArray[i] + "</b>";
      }
    }
    let newResponce2 = newResponce.split("*").join("</br>");
    // setresultdata(newResponce2);
    let newResponceArray = newResponce2.split(" ");
    for (let i = 0; i < newResponceArray.length; i++) {
      const nextword = newResponceArray[i];
      delaypara(i, nextword + " ");
    }
    setloading(false);
    setinput("");
  };

  const contextValue = {
    prevPrompt,
    setprevPromp,
    recetprompt,
    setrecentprompt,
    input,
    setinput,
    showResult,
    loading,
    resultdata,
    onsend,
    newChat
  };
  return (
    <context.Provider value={contextValue}>{props.children}</context.Provider>
  );
};

export default ContextProvider;
