import React from 'react'
import Cell from './Cell'

class Row extends React.Component {

    row = () => {
        let { rowCells, rowIndex } = this.props
        return rowCells.map((cell, index) => {
            return <Cell key={index} rowIndex={rowIndex} colIndex={index} cellState={cell}/>
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