import getNeighbours from './getNeighbours'

function countAliveNeighbours (cellRow, cellColumn, board) {

    const neighbours = getNeighbours(cellRow, cellColumn, board)
    let aliveNeighbours = neighbours.reduce((a,b) => a+b)

return aliveNeighbours
}

export default countAliveNeighbours
