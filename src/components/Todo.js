import React, { Component } from "react";
import Item from "./Item";

export class Todo extends Component {
  render() {
    return this.props.value.map(list => (
      <Item key={list.id} list={list} markComplete={this.props.markComplete} />
    ));
  }
}

export default Todo;
