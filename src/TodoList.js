import React, { Component } from "react";
import Todo from "./Todo";
import { connect } from "react-redux";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.removeTodo = this.removeTodo.bind(this);

    this.state = {
      task: ""
    };
  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    //this is where we utilize actions
    this.props.dispatch({
      type: "ADD_TODO",
      task: this.state.task
    });
    //reset form
    e.target.reset();
  }

  removeTodo(id) {
    this.props.dispatch({
      type: "REMOVE_TODO",
      id
    });
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
        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" name="task" onChange={this.handleInput} />
          <button>Add Todo</button>
        </form>
        <ul>{todo}</ul>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    todos: reduxState.todos
  };
}

export default connect(mapStateToProps)(TodoList);
