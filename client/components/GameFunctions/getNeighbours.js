import indicesAreOutOfBounds from './indicesAreOutOfBounds'

function getNeighbours(cellRow, cellColumn, board) {
    let neighbours = [0]

    for (let i = cellRow - 1; i <= cellRow + 1; i++) {

        for (let j = cellColumn - 1; j <= cellColumn + 1; j++) {
            if (indicesAreOutOfBounds(i, j, board) || (i == cellRow && j == cellColumn)) {
                continue
            }else {neighbours.push(board[i][j])}
        }
    }
    return neighbours
}

export default getNeighbours
