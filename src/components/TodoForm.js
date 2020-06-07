import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "./redux/todos/todoActions";

export class TodoForm extends Component {
  state = {
    content: ""
  };

  submitHandler = e => {
    e.preventDefault();

    this.props.addTodo(this.state);
    this.setState({ content: "" });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input onChange={e => this.setState({ content: e.target.value })} type="text" value={this.state.content} />
          <p>Add task</p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addTodo: param => dispatch(addTodo(param))
});

export default connect(null, mapDispatchToProps)(TodoForm);
