
import '../App.css';

export const TodoList=({listtodo,checkit})=>{
return(
    <div className='separate_task' >
<div>
{listtodo.title}
</div>

        <button style={{borderColor:listtodo.status ? "green" : "aquamarine"}} className='marf' onClick={()=>{
           checkit(listtodo.id)
        }}></button>
    </div>
)
}


