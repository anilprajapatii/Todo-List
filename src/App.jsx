import { useReducer } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducers from "./reducers/todoReducers";
import todoDispatchContext from "./context/todoDispatchContext";
import "./app.css"
function App() {
  const [list, dispatch] = useReducer(todoReducers, []);
  return (
    <div className="main-box">
    <TodoContext.Provider value={{ list }}>
      <todoDispatchContext.Provider value={{ dispatch }}>
        <AddToDo/>
        <TodoList />
      </todoDispatchContext.Provider>
    </TodoContext.Provider>
    </div>
  );
}

export default App;
