import TodoCard from "./TodoCard";

const TodoList = (props) => {
  const { todos } = props;
  return (
    <ul className="main">
      {todos.map((todo, todoIndex) => {
        return (
          <TodoCard
            {...props}
            key={todoIndex}
            todoIndex={todoIndex}
          >
            <p>{todo}</p>
          </TodoCard>
        );
      })}
    </ul>
  );
};

export default TodoList;
