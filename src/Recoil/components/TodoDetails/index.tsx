import { useRecoilState, useRecoilValue } from "recoil";
import { selectedItemSelector } from "../../atoms/selectedItem";
import { selectedIdState } from "../../atoms/selectedId";

export const TodoDetails = () => {
  const [, setSelectedId] = useRecoilState(selectedIdState);

  const todo = useRecoilValue(selectedItemSelector);
  const hideDetails = () => setSelectedId(undefined);
  if (!todo) return null;
  return (
    <div className="detail">
      <header>
        <h4>{todo.title}</h4>
        <button onClick={hideDetails}>X</button>
      </header>
      <span>{todo.description}</span>
    </div>
  );
};
