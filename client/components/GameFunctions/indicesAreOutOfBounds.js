import isOutOfBounds from './isOutOfBounds'

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
    return (isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array[0]))
}

export default indicesAreOutOfBounds
