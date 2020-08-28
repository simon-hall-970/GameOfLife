import React from 'react'
import Row from './Row'
import {connect} from 'react-redux'
import {updateBoard} from '../actions/board'
import createBoard from './GameFunctions/createBoard'

class GameBoard extends React.Component {
    
    componentDidMount() {
        this.board()
    }
    board = () => {
        //set board size to fill window size(less header)
        let height = Math.floor(window.innerHeight/10-4)
        let width = Math.floor(window.innerWidth/10)
        let emptyBoard = createBoard(height, width)
        this.props.dispatch(updateBoard(emptyBoard))
    }

    render() {
        let gameBoard = (this.props.board.map((row, index) => 
        <Row key={index} row={row}/>))
        return (
            <div className="game-board">
                {gameBoard}
            </div>
        )
    }
}

const mapStateToProps = reduxState => (
    {board: reduxState.board})

export default connect(mapStateToProps)(GameBoard)