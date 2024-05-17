import { useForm } from "../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ onNewTodo }) => {
  const { onInputChange, onResetForm, description } = useForm({
    description: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description === "") return;
    onNewTodo({
      description,
      id: uuidv4(),
      done: false,
    });
    onResetForm();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="description"
        id="description"
        placeholder="Que hay que hacer?"
        className="form-control"
        value={description}
        onChange={onInputChange}
      />
      <input
        type="submit"
        value="Agregar"
        className="btn btn-outline-warning mt-2"
      />
    </form>
  );
};

export default TodoForm;
