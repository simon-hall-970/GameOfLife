function createBoard (height, width=height) {
    //if width argument is not supplied it defaults to height argument creating a square
    
    let board = [] //set empty array

    //loop through to create rows depending on height argument
    for(let i = 0; i < height; i++) {

        //push array with width number of cells initially set to empty(dead) cells
        board.push(Array(width).fill(0))
    }
    return board
}

module.exports = createBoard
