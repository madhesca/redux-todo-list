import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import { todos } from "./components/content";

export class App extends Component {
  state = {
    todos
  };

  deleteTodo = id => {
    const todos = this.state.todos.filter(todo => {
      return todo.id !== id;
    });
    this.setState({
      todos
    });
  };

  getList = todo => {
    console.log(todo);
    todo.id = Math.random();
    const todos = [...this.state.todos, todo];
    this.setState({
      todos
    });
  };

  render() {
    const { todos } = this.state;
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList />
        <TodoForm getList={this.getList} />
      </div>
    );
  }
}

export default App;
