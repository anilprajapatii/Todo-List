import { useContext, useState } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";
import "./addtodo.css"
function AddToDo(){
    const [inputText,setInputText] = useState('');
    const {dispatch} = useContext(todoDispatchContext)
   
    return(
        <div className="addtodo-box">
            <input 
            type="text" 
            value={inputText}
            placeholder="Add Your Next Task..."
            onChange={e=>setInputText(e.target.value)}
            />
           
            <button onClick={()=>{
                dispatch({ type: "add_todo", payload: { todoText: inputText } });
                setInputText('')
                }}>ADD</button>    
        </div>
         
    )
}
export default AddToDo;