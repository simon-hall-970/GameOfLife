import React from 'react'
import Row from './Row'
const createBoard = require('./GameFunctions/createBoard')

class GameBoard extends React.Component {
    
    state = {
        boardSize: 'max'
    }

    boardSize = () => {
        if (this.state.boardSize == "max"){
            return this.maxSquareSide()
        } else { return this.state.boardSize}    
    }

    maxSquareSide = () => {
        return (
            Math.min(
                (Math.floor(window.innerWidth/10)),
                (Math.floor(window.innerHeight/10-4))
            )
        )
    }

    board = () => {
        let boardArr = createBoard(this.boardSize())
        return(boardArr.map((row, index) => 
            <Row key={index} row={row}/>)
        )
    }
    

    render() {

        return (
            <div className="game-board">
                {this.board()}
            </div>
        )
    }
}

export default GameBoard