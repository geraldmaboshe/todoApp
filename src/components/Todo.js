import React from "react";
import Item from "./Item";

// also made this a function
// you only need a class when there is state update involved
//  and if you want to get creative you can forget classes altogether
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
