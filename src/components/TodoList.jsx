function TodoList({ todos }) {
  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              <h3>
                <em>Title</em>: {todo.title}
              </h3>
              <p>Completed: {todo.completed ? "✅" : "❌"}</p>
            </li>
          );
        })}
    </>
  );
}

export default TodoList;
