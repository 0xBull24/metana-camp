import { useState } from "react";
import "./App.css";
import TodoCards from "./component/TodoCards";
import Button from "./component/Button";

function App() {
  const [todos, setTodos] = useState([]);

  function addTodos(event) {
    event.preventDefault();
    console.log(event.target.value);
  }

  function removeTodo(item) {
    let removedTodos = todos.slice()
    removedTodos.pop(item)
    setTodos(removedTodos);
  }

  return (
    <>
      <div className="app-name">
        <h1>Typical Todo App</h1>
      </div>
      <TodoCards todos={todos} setTodos={setTodos} removeTodo={removeTodo}/>
      <Button
        todoAction="add"
        addTodos={addTodos}
        setTodos={setTodos}
        todoList={todos}
      />
      <Button todoAction="delete" setTodos={setTodos} todoList={todos} />
    </>
  );
}

export default App;
