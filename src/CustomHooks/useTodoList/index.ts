import { useState } from "react";
import { defaultTodoList } from "../../defaultTodos";

export const useTodoList = () => {
  const [todoList, setTodoList] = useState<Todo[]>(defaultTodoList);
  const [selectedId, setSelectedId] = useState<string | undefined>();

  const addTodo = ({ completed = false, ...todo }: Omit<Todo, "id">) => {
    const id = Math.floor(Math.random() * 1000).toString();
    setTodoList((prev) => [...prev, { ...todo, id, completed }]);
  };

  const removeTodo = (id: string) =>
    setTodoList((prev) => prev.filter((todo) => todo.id !== id));

  const completeTodo = (id: string) =>
    setTodoList((prev) => {
      const itemIndex = prev.findIndex((todo) => todo.id === id);
      if (itemIndex >= 0)
        prev[itemIndex] = { ...prev[itemIndex], completed: true };
      return [...prev];
    });

  const showDetails = (id: string) => setSelectedId(id);
  const hideDetails = () => setSelectedId(undefined);

  const selectedItem = todoList.find((todo) => todo.id === selectedId);

  return {
    addTodo,
    todoList,
    removeTodo,
    selectedId,
    showDetails,
    hideDetails,
    completeTodo,
    selectedItem,
  };
};
