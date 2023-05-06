import { useTodo } from "../hook";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const { todoList } = useTodo();
  return (
    <ul>
      {todoList.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
};
