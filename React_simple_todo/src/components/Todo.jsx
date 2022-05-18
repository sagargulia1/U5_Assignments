import { useState } from "react"
import {TodoInput} from "./TodoList" 
import {TodoList} from "./TodoItem" 
import React from "react";
import { nanoid } from 'nanoid'

export const Todo=()=>{

const [todo,SetTodo]=useState([])

const addtodo=(data)=>{
    
    let tata={
        id:nanoid(),
        title:data,
        status:false
    }
    SetTodo([...todo,tata])
    
    
}

const checkit=(id)=>{
console.log(id)
    SetTodo(todo.map((e)=> (e.id===id ? {...e,status:!e.status}:e)),)
}
return(
    <div >
  <div className="displaytask">
      
  {
       todo.map((e)=>(
            <TodoList listtodo={e}  checkit={checkit}/>
         
        )
        )
        
    }
      </div>
<TodoInput addtodo={addtodo}/>

  


</div>
)
}