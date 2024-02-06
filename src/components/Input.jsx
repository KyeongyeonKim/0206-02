import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import { addTodo } from "../redux/modules/todos";

function Input() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodoBtn = (event) => {
    event.preventDefault();
    dispatch(
      addTodo({
        id: shortid.generate(),
        title,
        content,
        isDone: false,
      })
    );
  };

  return (
    <div>
      <h3>Input</h3>
      <form>
        제목 :{" "}
        <input
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        ></input>
        내용 :{" "}
        <input
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></input>
        <button onClick={addTodoBtn}>제출</button>
      </form>
    </div>
  );
}

export default Input;
