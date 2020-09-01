import React from 'react'
import {connect} from 'react-redux'
import { updateBoard } from '../actions/board'

class Cell extends React.Component {


    changeCellState = (event) => {
        const { rowIndex, colIndex, cellState, board } = this.props
        let newCellState = 0
        let newBoardState = [...board]
        if (cellState === 0) newCellState = 1
        newBoardState[rowIndex][colIndex] = newCellState
        this.props.dispatch(updateBoard(newBoardState))
    }

    render() {
        return(
        <div onClick={this.changeCellState} className={`cell ${this.props.cellState ? "live" : "dead"}`}/>
        )
    }
}

const mapStateToProps = reduxState => (
    {board: reduxState.board})

export default connect(mapStateToProps)(Cell)
