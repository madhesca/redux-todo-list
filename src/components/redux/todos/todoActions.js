import { ADD_LIST, DELETE, ADD_TODO } from "./todoTypes";

export const addList = content => ({
  type: ADD_LIST,
  payload: content
});

export const deleteTodo = content => ({
  type: DELETE,
  payload: content
});

export const addTodo = content => {
  content.id = Math.random();

  return {
    type: ADD_TODO,
    payload: content
  };
};
