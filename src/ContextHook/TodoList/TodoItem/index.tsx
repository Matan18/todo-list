import { useTodo } from "../../hook";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const { showDetails, completeTodo, removeTodo, selectedId } = useTodo();
  const handleShowDetails = () => showDetails(todo.id);

  const handleRemoveTodo = () => removeTodo(todo.id);

  const handleChangeCompleted: React.ChangeEventHandler<
    HTMLInputElement
  > = () => completeTodo(todo.id);

  const isSelected = todo.id === selectedId;

  return (
    <li data-selected={isSelected}>
      <h3>{todo.title}</h3>
      <div>
        <input
          type="checkbox"
          checked={!!todo.completed}
          onChange={handleChangeCompleted}
        />
        <button type="button" onClick={handleShowDetails}>
          +
        </button>
        <button type="button" onClick={handleRemoveTodo}>
          x
        </button>
      </div>
    </li>
  );
};
