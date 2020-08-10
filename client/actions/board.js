export const EMPTY_BOARD = 'EMPTY_BOARD'

export const emptyBoard = board => ({
    type: EMPTY_BOARD,
    board,
})