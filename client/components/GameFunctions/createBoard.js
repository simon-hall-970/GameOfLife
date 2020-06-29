function createBoard (size) {
    let board = []

    for(let i = 0; i < size; i++) {
        board.push(Array(size).fill(0))
    }
    return board
}

module.exports = createBoard
