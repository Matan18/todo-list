import { useRecoilValue } from "recoil";
import { todoState } from "../../atoms/todo";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const todoList = useRecoilValue(todoState);
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};
