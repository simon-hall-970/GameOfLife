import React from 'react'
const createBoard = require('./GameFunctions/createBoard')

const GameBoard = () => {
    let board = createBoard(20)
    console.log(board)


    return (board)
}

export default GameBoard