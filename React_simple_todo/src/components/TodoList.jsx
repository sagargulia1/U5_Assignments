import { useState } from "react";


export const TodoInput=({addtodo})=>{
 
    const [text,getText]=useState("")
    
    return(
        <div className="inputdetails">
            <input id="input" onChange={(e)=>{
      getText(e.target.value)
      
      
            }} type="text" placeholder="Write Something" />
            <button onClick={()=>{
            if(text.length<=0) return;
            addtodo(text)
            } } >+</button>
        </div>
    )
}