
import { useState } from 'react';
import './App.css';
import {Counter} from "./components/Counter";
function App() {


 const  [input,setInput]=useState(30);
 
  return (
    <div className='App'>
    <>
      <Counter value={input}/>
    </>
    </div>
    
  );
}

export default App;
