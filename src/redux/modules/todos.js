// import uuid from "react-uuid";
import shortid from "shortid";

const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const SWITCH_TODO = "SWITCH_TODO";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload };
};

export const deleteTodo = (payload) => {
  return { type: DELETE_TODO, payload };
};

export const switchTodo = (payload) => {
  return { type: SWITCH_TODO, payload };
};

const initialState = [
  {
    id: shortid.generate(),
    title: "투두리스트",
    content: "투두리스트 만들기",
    isDone: false,
  },
  {
    id: shortid.generate(),
    title: "투두리스트",
    content: "투두리스트 만들기",
    isDone: true,
  },
];

// 리듀서
const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      // action.payload => {새로운 todo item}
      const newTodoItem = action.payload;
      return [...state, newTodoItem];

    case DELETE_TODO:
      // action.payload => 삭제하려는 todo의 id
      const deleteTargetId = action.payload;
      const deleteFilteredList = state.filter((item) => {
        if (item.id === deleteTargetId) {
          return false;
        } else {
          return true;
        }
      });
      return deleteFilteredList;

    case SWITCH_TODO:
      // action.payload => todo의 id
      const switchTargetId = action.payload;
      const switchMappedList = state.map((item) => {
        if (item.id === switchTargetId) {
          return {
            ...item,
            isDone: !item.isDone,
          };
        } else {
          return item;
        }
      });
      return switchMappedList; //TODO: 여기 작성

    default:
      return state;
  }
};

export default todos;
