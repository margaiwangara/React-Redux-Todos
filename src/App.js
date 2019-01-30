import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Todo List</h3>
        <TodoList />
      </div>
    );
  }
}

export default App;
