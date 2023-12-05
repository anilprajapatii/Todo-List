import { useState } from "react";
import AddToDo from "./components/AddToDo/AddToDo"
import TodoList from "./components/TodoList/TodoLIst"

function App() {
  const [list,setList] = useState([
    {id : 1, todoData : 'todo 1',finished:false},
    {id : 2, todoData : 'todo 2',finished:true},    
]);
  return (
   <>
   <AddToDo updateList={(todo)=>setList([
    ...list,{id:list.list+1,todoData:todo,finished:false}
    ])}/>
   <TodoList list={list} updateList={setList}/>
   </>
  )
}

export default App
