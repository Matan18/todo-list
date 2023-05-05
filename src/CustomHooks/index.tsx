import { Form } from "./Form";
import { TodoDetails } from "./TodoDetails";
import { TodoList } from "./TodoList";
import { useTodoList } from "./useTodoList";

export const CustomHooks = () => {
  const {
    addTodo,
    todoList,
    selectedId,
    removeTodo,
    hideDetails,
    showDetails,
    selectedItem,
    completeTodo,
  } = useTodoList();

  return (
    <main>
      <Form onSubmit={addTodo} />
      <TodoList
        todoList={todoList}
        selectedId={selectedId}
        removeTodo={removeTodo}
        showDetails={showDetails}
        completeTodo={completeTodo}
      />

      <TodoDetails hideDetails={hideDetails} todo={selectedItem} />
    </main>
  );
};
