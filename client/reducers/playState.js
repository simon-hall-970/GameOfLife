import { TOGGLE_PLAY } from '../actions/playState'

const initialState = {playing: false}
const playing = (state=initialState, action) => {
    switch (action.type) {

    case TOGGLE_PLAY:
        return {playing: action.playState}

    default: 
        return state
    }
}

export default playing