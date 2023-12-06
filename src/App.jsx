import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo"
import TodoList from "./components/TodoList/TodoList"
import TodoContext from "./context/TodoContext"
function App() {
const [list,setList] = useState([
  {id : 1, todoData : 'todo 1',finished:false},
  {id : 2, todoData : 'todo 2',finished:true},    
]);
  return (
   <TodoContext.Provider value={{list,setList}}>
   <AddToDo updateList={(todo)=>setList([
    ...list,{id: list.length  +1,todoData:todo,finished:false}
    ])}/>
   <TodoList/>
   </TodoContext.Provider>
  )
}

export default App


