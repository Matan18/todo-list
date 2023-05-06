import { createContext } from "react";
import { useTodoList } from "../CustomHooks/useTodoList";
import { Form } from "./Form";
import { TodoList } from "./TodoList";
import { TodoDetails } from "./TodoDetails";

export const Context = createContext({} as ReturnType<typeof useTodoList>);

export const ContextHook = () => {
  const todoList = useTodoList();

  return (
    <Context.Provider value={todoList}>
      <main>
        <Form />
        <TodoList />
        <TodoDetails />
      </main>
    </Context.Provider>
  );
};
