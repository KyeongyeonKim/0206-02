import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteTodo, switchTodo } from "../redux/modules/todos";

function TodoList({ isDone }) {
  const todos = useSelector((item) => {
    return item.todos;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <h3>{isDone === true ? "TodoList" : "DoneList"}</h3>
      <div>
        {todos
          .filter((todo) => todo.isDone !== isDone)
          .map((todo) => (
            <div
              key={todo.id}
              style={{ border: "1px solid green", width: "300px" }}
            >
              <p>제목 : {todo.title}</p>
              <p>내용 : {todo.content}</p>
              <button
                onClick={() => {
                  dispatch(switchTodo(todo.id));
                }}
              >
                {isDone === true ? "완료" : "취소"}
              </button>
              <button
                onClick={() => {
                  dispatch(deleteTodo(todo.id));
                }}
              >
                삭제
              </button>
              <button>상세보기</button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default TodoList;
