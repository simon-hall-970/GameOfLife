const getNeighbours = require('./getNeighbours')

function countAliveNeighbours (cellRow, cellColumn, board) {
    const neighbours = getNeighbours(cellRow, cellColumn, board)
    let aliveNeighbours = neighbours.reduce((a,b) => a+b)

return aliveNeighbours
}

module.exports = countAliveNeighbours
