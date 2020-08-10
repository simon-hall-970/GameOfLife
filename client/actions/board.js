export const EMPTY_BOARD = 'EMPTY_BOARD'
export const RANDOM_BOARD = 'RANDOM_BOARD'

export const emptyBoard = board => ({
    type: EMPTY_BOARD,
    board,
})

export const randomBoard = board => ({
    type: RANDOM_BOARD,
    board
})