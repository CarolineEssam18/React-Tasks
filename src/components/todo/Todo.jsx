
import { useSelector } from "react-redux";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import {addtodoaction} from "../../redux/todo"
import{removetodoaction} from "../../redux/todo"
import { useDispatch } from "react-redux";

function Todo() {
    const todostate = useSelector(state => state.todos)
        const dispatch=useDispatch()
    

  const addTodo = (task) => { 
    dispatch(addtodoaction(task))
  };

  const deleteTodo = (index) => {
    dispatch(removetodoaction(index))
  }

  return (
    <div className="text-center py-2 todo-wrapper container">
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todostate} deleteTodo={deleteTodo}  />
    </div>
  );
}

export default Todo;