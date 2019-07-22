import * as types from "./ActionTypes";

export const updateDate = date => {
  return {
    type: types.UPDATE_DATE,
    date
  };
};
export const addTodo = text => {
  return {
    type: types.ADD_TODO,
    text
  };
};

export const deleteTodo = id => {
  return {
    type: types.DELETE_TODO,
    id
  };
};

export const toggleTodo = id => {
  return {
    type: types.TOGGLE_TODO,
    id
  };
};
