import React, { useEffect } from "react";
import { connect } from "react-redux";
import { addList, deleteTodo } from "./redux/todos/todoActions";
import { content } from "../components/content";

console.log(content);

const TodoList = ({ todosRedux, deleteTodo, addList }) => {
  useEffect(() => {
    addList(content);
  }, [content]);

  const todoList = todosRedux.length ? (
    todosRedux.map(todo => (
      <h4 onClick={() => deleteTodo(todo.id)} key={todo.id}>
        {todo.content}
      </h4>
    ))
  ) : (
    <h2>You have to pending task for now. Yay!!</h2>
  );

  return <div>{todoList}</div>;
};

const mapStateToProps = state => ({
  todosRedux: state.todos.todos
});

const mapDispatchToProps = dispatch => ({
  addList: justAParam => dispatch(addList(justAParam)),
  deleteTodo: paramAgain => dispatch(deleteTodo(paramAgain))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
