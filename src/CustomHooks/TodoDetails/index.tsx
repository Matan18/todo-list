type Props = {
  hideDetails: () => void;
  todo?: Todo;
};

export const TodoDetails = ({ todo, hideDetails }: Props) =>
  todo ? (
    <div className="detail">
      <header>
        <h4>{todo.title}</h4>
        <button onClick={hideDetails}>X</button>
      </header>
      <span>{todo.description}</span>
    </div>
  ) : null;
