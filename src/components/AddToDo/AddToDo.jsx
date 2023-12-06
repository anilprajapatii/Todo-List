import { useState } from "react";

function AddToDo({updateList}){
    const [inputText,setInputText] = useState('');
    return(
        <div>
            <input 
            type="text" 
            value={inputText}
            placeholder="Add Your Next Task..."
            onChange={e=>setInputText(e.target.value)}
            />
           
            <button onClick={()=>{
                updateList(inputText)
                setInputText('')
                }}>Add</button>
                
        </div>
         
    )
}
export default AddToDo;