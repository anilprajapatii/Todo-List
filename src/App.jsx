import { useReducer } from "react";
import AddToDo from "./components/AddToDo/AddToDo";
import TodoList from "./components/TodoList/TodoList";
import TodoContext from "./context/TodoContext";
import todoReducers from "./reducers/todoReducers";
import todoDispatchContext from "./context/todoDispatchContext";
function App() {
  const [list, dispatch] = useReducer(todoReducers, []);
  return (
    <TodoContext.Provider value={{ list }}>
      <todoDispatchContext.Provider value={{ dispatch }}>
        <AddToDo/>
        <TodoList />
      </todoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

export default App;
