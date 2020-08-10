import nextCellState from './nextCellState'
import countAliveNeighbours from './countAliveNeighbours'

function nextBoard(currentBoard) {

    let nextGen = []

    for(let i=0; i<currentBoard.length; i++) {

     
        let row=[]


        for(let j=0; j<currentBoard[i].length; j++) {

            //could be in countAliveNeighbours
            let neighCount = countAliveNeighbours(i,j,currentBoard)
            let cellState = currentBoard[i][j]

            //could be in nextCellState
            let nextCellGen = nextCellState(cellState, neighCount)
            row.push(nextCellGen)
        }
        
        nextGen.push(row)
    }

     return nextGen
}

export default nextBoard
