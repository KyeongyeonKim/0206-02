import React from "react";
import { useSelector } from "react-redux";

function TodoList() {
  const todos = useSelector((state) => state.todos.todos);
  return (
    <div>
      <h3>TodoList</h3>
      <div>
        {todos.map((todo) => (
          <div key={todo.id}>
            {todo.title} - {todo.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
