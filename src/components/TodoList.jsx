import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { switchTodo } from "../redux/modules/todos";

function TodoList() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const isDoneChangeBtn = () => {
    dispatch(switchTodo());
  };

  return (
    <div>
      <h3>TodoList</h3>
      <div>
        {todos
          .filter((todo) => todo.isDone === false)
          .map((todo) => (
            <div
              key={todo.id}
              style={{ border: "1px solid green", width: "300px" }}
            >
              <p>
                {todo.title} - {todo.content}
              </p>
              <button onClick={isDoneChangeBtn}>완료</button>
              <button>삭제</button>
              <button>상세보기</button>
            </div>
          ))}
      </div>
      <hr />
      <h3>DoneList</h3>
      <div>
        {todos
          .filter((todo) => todo.isDone === true)
          .map((todo) => (
            <div
              key={todo.id}
              style={{ border: "1px solid green", width: "300px" }}
            >
              <p>
                {todo.title} - {todo.content}
              </p>
              <button>취소</button>
              <button>삭제</button>
              <button>상세보기</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
