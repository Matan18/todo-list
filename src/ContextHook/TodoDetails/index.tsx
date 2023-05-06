import { useTodo } from "../hook";

export const TodoDetails = () => {
  const { hideDetails, selectedItem: todo } = useTodo();

  if (!todo) return null;

  return (
    <div className="detail">
      <header>
        <h4>{todo.title}</h4>
        <button onClick={hideDetails}>X</button>
      </header>
      <span>{todo.description}</span>
    </div>
  );
};
