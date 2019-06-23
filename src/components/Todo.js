import React, { Component } from 'react';

export class Todo extends Component {
    render() {

        return (
            this.props.value.map((list) => (
                <p>{list.title}</p>

            )
            )
        )

    }
}


export default Todo
