import { atom } from "recoil";
import { defaultTodoList } from "../../../defaultTodos";

export const todoState = atom({
  key: "todo-list",
  default: defaultTodoList,
});
