const nextCellState = require('./nextCellState')
const countAliveNeighbours = require('./countAliveNeighbours')

function nextBoard(currentBoard) {
    //create empty array for next generation i.e. next board
    let nextGen = []

    //loop through each row in the current board
    for(let i=0; i<currentBoard.length; i++) {

        //create an empty array for the new row
        let row=[]

        //loop through each cell in the current row
        for(let j=0; j<currentBoard[i].length; j++) {

            //get state and number of alive neighbours for current cell
            let neighCount = countAliveNeighbours(i,j,currentBoard)
            let cellState = currentBoard[i][j]

            //determine next generation of current cell then push to row
            let nextCellGen = nextCellState(cellState, neighCount)
            
            row.push(nextCellGen)
        }
        //after looping through each cell in a row push the row to the next board generation
        nextGen.push(row)
    }
    //after looping through all cells in all rows return final board
     return nextGen
}

module.exports = nextBoard
