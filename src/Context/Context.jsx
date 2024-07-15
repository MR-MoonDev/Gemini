import { createContext, useState } from "react";

// import run from "../config/Gimini"
import run from "../config/Gimini";
export const context = createContext();
const ContextProvider=(props)=>{
    const[input,setinput]=useState("")
    const[recetprompt,setrecentprompt]=useState("");
    const[prevPrompt,setprevPromp]=useState([]);
    const[showResult,setshowResult]=useState(false);
    const[loading,setloading]=useState(false);
    const[resultdata,setresultdata]=useState("");
 const onsend=async(prompt)=>{
   setresultdata("")
   setloading(true)
   setshowResult(true)
   setrecentprompt(input)
   const response = await run(input)
   setresultdata(response);
   setloading(false);
   setinput("");


 }

  const contextValue={
    prevPrompt,setprevPromp,recetprompt,setrecentprompt,input,setinput,showResult,loading,resultdata,onsend
  }
  return(
    <context.Provider value={contextValue}>
        {
            props.children
        }
    </context.Provider>
  )
}

export default ContextProvider;