import { useRecoilState } from "recoil";
import { selectedIdState } from "../../../atoms/selectedId";
import { useMemo } from "react";
import { todoState } from "../../../atoms/todo";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const [selectedId, setSelectedId] = useRecoilState(selectedIdState);
  const [, setTodoList] = useRecoilState(todoState);

  const handleShowDetails = () => setSelectedId(todo.id);

  const handleRemoveTodo = () =>
    setTodoList((prev) => prev.filter((todoItem) => todoItem.id !== todo.id));

  const handleChangeCompleted: React.ChangeEventHandler<
    HTMLInputElement
  > = () => {
    setTodoList((prev) => {
      const newList = [...prev];
      const todoIndex = newList.findIndex(
        (todoItem) => todoItem.id === todo.id
      );

      if (todoIndex >= 0)
        newList[todoIndex] = { ...newList[todoIndex], completed: true };

      return [...newList];
    });
  };

  const isSelected = useMemo(() => todo.id === selectedId, [todo, selectedId]);

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
