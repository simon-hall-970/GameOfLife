import React from 'react'
import { connect } from 'react-redux'
import { randomBoard } from '../actions/board'
const createBoard = require('./GameFunctions/createBoard')

function randNum(max, min) {
    return Math.floor(min + Math.random() * (max - min))
  }

class Randomize extends React.Component{


    randomizeBoard = () => {
        const height = this.props.board.length
        const width = this.props.board[0].length
        const totalCells = height * width

        //how many live cells randomly between 15% - 45% (tweak as required)
        let liveCellPercentage = randNum(15, 45)
        let randLiveCellsCount = totalCells * liveCellPercentage

        let rowIndexes = []
            for (let i = 0; i < randLiveCellsCount; i++) {
                rowIndexes.push(randNum(0, height))
            }
        let columnIndexes = []
        for (let i = 0; i < randLiveCellsCount; i++) {
            columnIndexes.push(randNum(0, width))
        }

        let randBoard = createBoard(height, width)
        rowIndexes.forEach((row, index) => {
            let col = columnIndexes[index]
            console.log(col, row)
            randBoard[row][col] = 1
        })

        this.props.dispatch(randomBoard(randBoard))
    }

    render() {

        return(
            <button className="genesis" onClick={this.randomizeBoard}>
                randomize initial state
            </button>
        )
    }
}

function mapStateToProps(reduxState) {
    return({
        board: reduxState.board
    })
}

export default connect(mapStateToProps)(Randomize)