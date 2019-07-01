import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import axios from 'axios';


class App extends Component {
  state = {
    main: [
      // {
      //   id: 1,
      //   title: "going to Bongohive",
      //   completed: true,
      //   items: [
      //     {
      //       id: 2,
      //       title: "doing the hackathon",
      //       completed: false,
      //     }
      //   ]


      // },
      // {
      //   id: 1,
      //   title: "going home",
      //   completed: false,
      //   items: [
      //     {
      //       id: 2,
      //       title: "cooking",
      //       completed: true
      //     }
      //   ]


      // }
    ]
  }
  markComplete = (id) =>{
    this.setState({main: this.state.main.map(list =>{
      if(list.id === id){
        list.completed = !list.completed
      }return list;
    })});
    
  }
 

  componentDidMount(){
      axios.get('https://jsonplaceholder.typicode.com/todos').
      then(res=>this.setState({main: res.data}))
  }


  render() {
    return (
      <div className="App" >
        <Todo value={this.state.main} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
