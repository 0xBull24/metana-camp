import { useState } from "react";

export default function Button({ todoAction, setTodos, todoList }) {
  const [newTodo, setNewTodo] = useState([]);

  function captureInput(event) {
    setNewTodo(event.target.value);
  }

  function updateTodoList() {
    console.log("new todo", newTodo);
    setTodos((todoList) => [...todoList, newTodo]);
    document.getElementById("todo-input").value = "";
  }

  function clearList() {
    document.getElementById("todo-input").value = "";
    setTodos([]);
  }

  if (todoAction === "add") {
    return (
      <>
        <input
          id="todo-input"
          type="text"
          placeholder="Enter new list item ..."
          onChange={captureInput}
        />
        <button onClick={updateTodoList}>Add to the list</button>
      </>
    );
  } else if (todoAction === "delete") {
    return <button onClick={clearList}>Clear entire list</button>;
  }
}
