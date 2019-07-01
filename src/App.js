import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    main: []
  };
  markComplete = id => {
    this.setState({
      main: this.state.main.map(list => {
        if (list.id === id) {
          list.completed = !list.completed;
        }
        return list;
      })
    });
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState({ main: res.data }));
    // .catch(err => console.log(err.message));
  }

  render() {
    return (
      <div className="App">
        <Todo value={this.state.main} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
