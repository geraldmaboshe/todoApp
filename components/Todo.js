import React from "react";
import Item from "./Item";

function Todo(props) {
  return props.value.map(list => (
    <Item
      key={list.id}
      list={list}
      markComplete={e => props.markComplete(e, list.id)}
    />
  ));
}

export default Todo;
