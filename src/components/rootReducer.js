import { combineReducers } from "redux";
import todoReducer from "./redux/todos/todoReducer";

export default combineReducers({
  todos: todoReducer
});
