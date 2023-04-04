import React, { useState } from "react";

function AddInput() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addTodo = () => {
    setTodoList((todoList) => [...todoList, { todo }]);
  };

  return (
    <>
      <h4>{todo}</h4>
      <input
        className="input"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Add a new task here..."
      />
      <button onClick={addTodo}>Add</button>

      <p>{todoList.map((todo) => todo)}</p>
    </>
  );
}

export default AddInput;
