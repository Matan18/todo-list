import { useRecoilState } from "recoil";
import { todoState } from "../../atoms/todo";

export const Form = () => {
  const [, setTodoList] = useRecoilState(todoState);
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString() ?? "";
    const description = formData.get("description")?.toString() ?? "";
    const id = Math.floor(Math.random() * 1000).toString();
    setTodoList((prev) => [
      ...prev,
      { title, description, id, completed: false },
    ]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <textarea name="description" />
      <button type="submit">Enviar</button>
    </form>
  );
};
