import { useEffect, useMemo, useReducer } from "react";
import { todoReducer } from "../todoReducer";

export const useTodo = () => {
  const initialState = [];

  // Funcion iniciadora de estado: trae el webStore si hay datos.
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) ?? [];
  };

  // Llamado al useReducer.
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  // Contador de todos
  const totalTodos = useMemo(
    () => todos.reduce((total, todo) => total + 1, 0),
    [todos]
  );

  // Contador de todos pendientes.
  const pendingTodos = useMemo(
    () => todos.reduce((total, todo) => (todo.done ? total : total + 1), 0),
    [todos]
  );

  // Despachando los reducers.
  const onNewTodo = (todo) => {
    dispatch({ type: "[TODO] add-todo", payload: todo });
  };

  const onRemoveTodo = (id) => {
    dispatch({ type: "[TODO] remove-todo", payload: id });
  };

  const onToggleTodo = (id) => {
    dispatch({ type: "[TODO] toogle-todo", payload: id });
  };
  return {
    todos,
    totalTodos,
    pendingTodos,
    onNewTodo,
    onRemoveTodo,
    onToggleTodo,
  };
};
