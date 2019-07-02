import React from "react";

function Item(props) {
  return (
    <div style={{ textDecoration: props.list.completed && "line-through" }}>
      <input type="checkbox" onChange={props.markComplete} />
      {props.list.title}
    </div>
  );rt
}

export default Item;
