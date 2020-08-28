import { combineReducers } from 'redux'

import board from './board'
import playing from './playState'

export default combineReducers({
    board,
    playing,
})