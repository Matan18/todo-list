import { useTodo } from "../hook";

export const Form = () => {
  const { addTodo } = useTodo();
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const title = formData.get("title")?.toString() || "";
    const description = formData.get("description")?.toString() || "";

    addTodo({ title, description });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" placeholder="Título" />
      <textarea name="description" placeholder="Descrição" />
      <button type="submit">Registrar</button>
    </form>
  );
};
