const TodoItem = ({ todo, onRemoveTodo, onToggleTodo }) => {
  return (
    <li className="list-group-item d-flex justify-content-between custom-bg-color">
      <span
        className={`align-self-center custom-cursor-pointer ${
          todo.done && "text-decoration-line-through custom-cursor-pointer"
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button className="btn btn-danger" onClick={() => onRemoveTodo(todo.id)}>
        Borrar
      </button>
    </li>
  );
};

export default TodoItem;
