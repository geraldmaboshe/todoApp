import React, { Component } from "react";
import Todo from "./components/Todo";
import "./App.css";
import axios from "axios";

class App extends Component {
  state = {
    main: []
  };

  // I coudn't figure out how to make the markComplete cleaner 😢 
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

  try{
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then(res => this.setState(state =>({
        main: res.data 
      })));
}catch(e){
      alert("An eeror occured. It could be that you're offline")
}
  }


  render() {
    return (
      <div className="App">
        {this.state.main.length ? (
          <Todo value={this.state.main} markComplete={this.markComplete} />
        ) : (
          <h5>Loading todos...Please wait!!!</h5>
        )}
      </div>
    );
  }
}

export default App;
