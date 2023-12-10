import { useContext, useState } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";

function AddToDo(){
    const [inputText,setInputText] = useState('');
    const {dispatch} = useContext(todoDispatchContext)
    return(
        <div>
            <input 
            type="text" 
            value={inputText}
            placeholder="Add Your Next Task..."
            onChange={e=>setInputText(e.target.value)}
            />
           
            <button onClick={()=>{
                dispatch({ type: "add_todo", payload: { todoText: inputText } });
                setInputText('')
                }}>Add</button>
                
        </div>
         
    )
}
export default AddToDo;