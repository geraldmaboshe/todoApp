import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    main: []
  };
  // this can still be improved
  // the difference between the earlier method is that this doesnt directly access this.state
  // it changes the state it is getting, find a way of making this
  // figure out a way of making this more cleaner 😉
  markComplete = (e, id) => {
    this.setState(state => ({
      main: state.main.map(list => {
        if (list.id === id) {
          list.completed = !list.completed;
        }
        return list;
      })
    }));
  };

  componentDidMount() {
    // There is a lot improvement that you should here as well
    //  make sure you catch errors that might happen
    // an example is a network error, try and turn off internet and see what happens
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState({ main: res.data }));
  }

  // leverage conditional rendering more
  //  example is a loading message added that will display when the todos haven't loaded yet
  render() {
    return (
      <div className="App">
        {this.state.main.length ? (
          <Todo value={this.state.main} markComplete={this.markComplete} />
        ) : (
          <h4>Loading ...</h4>
        )}
      </div>
    );
  }
}

export default App;
