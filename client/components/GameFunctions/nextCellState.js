import isOverPopulated from './isOverPopulated'
import isUnderPopulated from './isUnderPopulated'
import isRessurectable from './isRessurectable'

function nextCellState (cellState, neighbourCount) {
     
    //live cell condition tests
    if (cellState) {
        if (isOverPopulated(neighbourCount) || isUnderPopulated(neighbourCount)) {
            return 0 //cell dies
        }
        else {
            return 1 //cell lives
        }
    }
    //deadcell condition tests
    else {
        if (isRessurectable(neighbourCount)) {
            return 1 //cell ressurected
        }
        else return 0 //cell stays dead
    }
}

export default nextCellState
