import Todo from "../Todo/Todo";

function TodoList({list,setList}) {
   
    return (
        <div>
            {list.length > 0 && list.map(todo => <Todo 
                                                     key={todo.id}
                                                     id={todo.id} 
                                                     isFinished = {todo.finished} 
                                                     todoData={todo.todoData}
                                                />)}
       </div>
    );
}
export default TodoList;