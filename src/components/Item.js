import React, { Component } from "react";

// I removed the myStyle function and replaced it with a condition
// changed the whole class to a function

export class Item extends Component {
  render() {
    return (
      <div
        style={{ textDecoration: this.props.list.completed && "line-through" }}
      >
        <input
          type="checkbox"
          onChange={this.props.markComplete.bind(this, this.props.list.id)}
        />
        {this.props.list.title}
      </div>
    );
  }
}

export default Item;
