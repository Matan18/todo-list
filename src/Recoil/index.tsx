import { RecoilRoot } from "recoil";
import { Form } from "./components/Form";
import { TodoList } from "./components/TodoList";
import { TodoDetails } from "./components/TodoDetails";

export const Recoil = () => {
  return (
    <RecoilRoot>
      <main>
        <Form />
        <TodoList />
        <TodoDetails />
      </main>
    </RecoilRoot>
  );
};
