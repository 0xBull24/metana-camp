
export default function TodoCards({ todos, setTodos, removeTodo }) {
  console.log("from parent component", todos);

  if (todos.length == 0) {
    return (
      <div className="todo-card">
        <p>What are the things you need to do</p>
      </div>
    );
  } else if (todos.length > 0) {
    return (
      <>
        {todos.map((todoItem) => (
          <div key={todoItem} className="todo-card">
            <p>
              {todoItem}
              <button onClick={removeTodo} className="delete">
                ✅
              </button>
            </p>
          </div>
        ))}
      </>
    );
  }
}
