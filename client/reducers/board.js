import { UPDATE_BOARD } from '../actions/board'


const board = (state=[], action) => {
    switch (action.type) {

    case UPDATE_BOARD:
        return action.board

    default: 
        return state
    }
}

export default board