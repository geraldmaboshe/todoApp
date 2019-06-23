import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';

class App extends Component {
  state = {
    main: [
      {
        id: 1,
        title: "going to Bongohive",
        isComplete: false,
        items: [
          {
            id: 2,
            title: "doing the hackathon",
            isComplete: false,
          }
        ]


      },
      {
        id: 1,
        title: "going home",
        isComplete: false,
        items: [
          {
            id: 2,
            title: "cooking",
            isComplete: false,
          }
        ]


      }
    ]
  }

  render() {
    return (
      <div className="App" >
        <Todo value={this.state.main} />
      </div>
    );
  }
}

export default App;
