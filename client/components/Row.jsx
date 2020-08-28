import React from 'react'
import Cell from './Cell'

class Row extends React.Component {

    row = () => {
        let row = this.props.row
        return row.map((cell, index) => {
            return <Cell key={index} cellState={cell}/>
        })
    }

    render() {
        return (
            <div className="row">
                {this.row()}
            </div>
        )
    }
}

export default Row