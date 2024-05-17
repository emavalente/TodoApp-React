import { useEffect } from "react";
import { useTodos } from "./hooks/useTodos";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const TodoApp = () => {
  const {
    todos,
    totalTodos,
    pendingTodos,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
  } = useTodos();
  // Grabando los todos en webStorage cada que cambie el listado de todos.
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>
        TodoApp ({totalTodos}), <small>pendientes: {pendingTodos}</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onRemoveTodo={onRemoveTodo}
            onToggleTodo={onToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar ToDo</h4>
          <hr />
          <TodoForm onNewTodo={onNewTodo} />
        </div>
      </div>
    </div>
  );
};

export default TodoApp;
