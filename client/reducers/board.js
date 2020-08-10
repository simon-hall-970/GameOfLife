import { EMPTY_BOARD } from '../actions/board'

const board = (state=[], action) => {
    switch (action.type) {

        case EMPTY_BOARD:
            return action.board

    default: 
        return state
    }
}

export default board