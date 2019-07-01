import React from "react";

// I removed the myStyle function and replaced it with a condition
// changed the whole class to a function

function Item(props) {
  return (
    <div style={{ textDecoration: props.list.completed && "line-through" }}>
      <input type="checkbox" onChange={props.markComplete} />
      {props.list.title}
    </div>
  );
}

export default Item;
