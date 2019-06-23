import React, { Component } from 'react';

export class Item extends Component {
    render() {
        return (
            this.props.myProp.map((item) => (
                <p>{item.title} </p>
            )
            )
        )

    }
}


export default Item