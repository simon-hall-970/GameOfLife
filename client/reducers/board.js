import { EMPTY_BOARD, RANDOM_BOARD } from '../actions/board'


const board = (state=[], action) => {
    switch (action.type) {

    case EMPTY_BOARD:
        return action.board

    case RANDOM_BOARD:
        return action.board


    default: 
        return state
    }
}

export default board