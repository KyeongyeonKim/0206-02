// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = {
  todos: [
    {
      id: shortid.generate(),
      title: "투두리스트",
      content: "투두리스트 만들기",
      isDone: false,
    },
  ],
};

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case DELETE_TODO:
      return; //TODO: 여기 작성

    case SWITCH_TODO:
      return; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
