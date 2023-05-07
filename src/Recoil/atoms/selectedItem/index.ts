import { selector } from "recoil";
import { todoState } from "../todo";
import { selectedIdState } from "../selectedId";

export const selectedItemSelector = selector({
  key: "selectedItem",
  get: ({ get }) => {
    const todoList = get(todoState);
    const selectedId = get(selectedIdState);

    return todoList.find((todo) => todo.id === selectedId);
  },
});
