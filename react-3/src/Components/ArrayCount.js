import React, { Component } from 'react'

export default class ArrayCount extends Component {
    render() {
        const total = this.props.total;
        const current = this.props.current;

        return (
            <div>
               <h5>{current}/{total}</h5> 
            </div>
        )
    }
}
