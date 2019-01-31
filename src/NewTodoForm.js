import React, { Component } from "react";

class NewTodoForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
    this.props.handleSubmit(this.state.task);
    //reset form
    e.target.reset();
    //redirect
    this.props.history.push("/todos");
  }

  render() {
    return (
      <div>
        <form action="#" onSubmit={this.handleSubmit}>
          <input type="text" name="task" onChange={this.handleInput} />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

export default NewTodoForm;
