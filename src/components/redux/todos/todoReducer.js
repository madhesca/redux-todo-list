import { ADD_LIST, DELETE, ADD_TODO } from "./todoTypes";

const initialState = {
  todos: []
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
      return {
        ...state,
        todos: action.payload
      };

    case DELETE:
      return {
        ...state,
        todos: state.todos.filter(todo => {
          return todo.id !== action.payload;
        })
      };

    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      };
    default:
      return state;
  }
};

export default todoReducer;
