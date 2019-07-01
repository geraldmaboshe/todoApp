import React, { Component } from 'react'

export class Item extends Component {

    myStyle = () =>{
        if(this.props.list.completed){
           return {
               textDecoration: 'line-through'
         }
        }else{
            return {
                textDecoration: 'none'
        }
 }
     }
    render() {
        return (
            <div style={this.myStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, 
                 this.props.list.id)

                }/>
                {this.props.list.title}
                </p>
            </div>
            
            )
        
    }
}

export default Item
