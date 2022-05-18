import {  useState } from "react"
export function Counter(props){
    const [counter,setCounter]=useState(props.value)
    
      
    const calculateIt=(given)=>{
        setCounter(counter+given)
    }
    return(
        <div>
  <h3 style={{color:counter%2===0 ? "green":"red"}}> {counter} </h3>
        <button onClick={
            ()=>{
                calculateIt(1)
            }
        }>
        Add Button</button>
        <button onClick={
            ()=>{
                if(counter>=1){
                    calculateIt(-1)
                }
            }
        }>
        Sub Button</button>
        <button onClick={
            ()=>{
                if(counter>=1){
                   
                    setCounter(counter*2)
                }
            }
        }>Double</button>
        </div>
    )
}