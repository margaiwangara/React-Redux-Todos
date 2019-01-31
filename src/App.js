import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList";
import { Link, Route, Redirect } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Welcome to my app</h3>
        <p>
          <Link to="/todos">See My Todos</Link>
        </p>
        <p>
          <Link to="/todos/new">Add New Todo</Link>
        </p>
        <Route path="/todos" component={TodoList} />
        <Route exact path="/" component={() => <Redirect to="/todos" />} />
      </div>
    );
  }
}

export default App;
