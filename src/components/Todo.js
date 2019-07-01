import React, { Component } from 'react';
import Item from './Item';

export class Todo extends Component {
 
    render() {

        return (
            this.props.value.map((list) => (
                <div>
                    <p>
                    <Item key={list.id} list={list} markComplete={this.props.markComplete}/>
                    </p>
                </div>
                
            )
            )
        )

    }
}


export default Todo
