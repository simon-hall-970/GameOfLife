const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
    let nextGen = []

    for(let i=0; i<currentBoard.length; i++) {
        let row=[]

        for(let j=0; j<currentBoard[i].length; j++) {
            let neighCount = countAliveNeighbours(i,j,currentBoard)

            row.push(neighCount)
        }

        nextGen.push(row)
    }
     return nextGen
}

module.exports = nextBoard
