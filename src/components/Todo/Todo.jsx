import { useState } from "react";
import "./todo.css"
function Todo({todoData, isFinished , changeFinished,onDelete,onEdit}){
    const [finished,setFinished] = useState(isFinished)
    const [isEditting,setIsEditting] = useState(false)
    const [editText,setEditText] = useState(todoData)
    return (
        <div className="Todo">
            <div className="Todo-inner">

            {/* <input type="checkbox" checked={finished} onChange={(e) => {
                setFinished(e.target.checked)
                changeFinished(e.target.checked)
            }}/> */}
            {(isEditting) ? <input className="todo-taskInput" type="text" value={editText} onChange={e =>setEditText(e.target.value)}/> : <span>{todoData}</span>}
         
            <button className="btn-edit" onClick={()=>{
                setIsEditting(!isEditting);
                onEdit(editText)
            }}>{(!isEditting)?"Edit":"Save"}</button>
            <button  className="btn-delete" onClick={onDelete}>Delete</button>
            
            </div>
        </div>
    )
}
export default Todo;