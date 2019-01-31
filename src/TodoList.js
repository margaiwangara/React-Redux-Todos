import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";
import { addTodo, removeTodo } from "./actionCreators";
import NewTodoForm from "./NewTodoForm";
import { Route } from "react-router-dom";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  handleAdd(val) {
    this.props.addTodo(val);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }
  render() {
    const todo = this.props.todos.map((data, index) => (
      <Todo
        removeTodo={this.removeTodo.bind(this, data.id)}
        task={data.task}
        key={index}
      />
    ));
    return (
      <div>
        <Route
          path="/todos/new"
          component={props => (
            <NewTodoForm {...props} handleSubmit={this.handleAdd} />
          )}
        />
        <Route path="/todos" component={() => <ul>{todo}</ul>} />
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(
  mapStateToProps,
  { addTodo, removeTodo }
)(TodoList);
