type Props = {
  todo: Todo;
  isSelected: boolean;
  removeTodo: (id: string) => void;
  showDetails: (id: string) => void;
  completeTodo: (id: string) => void;
};

export const TodoItem = ({
  todo,
  isSelected,
  removeTodo,
  showDetails,
  completeTodo,
}: Props) => {
  const handleShowDetails = () => showDetails(todo.id);

  const handleRemoveTodo = () => removeTodo(todo.id);

  const handleChangeCompleted: React.ChangeEventHandler<
    HTMLInputElement
  > = () => completeTodo(todo.id);

  return (
    <li data-selected={isSelected}>
      <h3>{todo.title}</h3>
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
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
