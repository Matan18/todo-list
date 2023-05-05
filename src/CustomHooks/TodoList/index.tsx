import { TodoItem } from "./TodoItem";

type Props = {
  todoList: Todo[];
  selectedId: string | undefined;
  removeTodo: (id: string) => void;
  showDetails: (id: string) => void;
  completeTodo: (id: string) => void;
};

export const TodoList = ({
  todoList,
  selectedId,
  removeTodo,
  showDetails,
  completeTodo,
}: Props) => (
  <ul>
    {todoList.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        removeTodo={removeTodo}
        showDetails={showDetails}
        completeTodo={completeTodo}
        isSelected={todo.id === selectedId}
      />
    ))}
  </ul>
);
