import isOutOfBounds from './isOutOfBounds'

function indicesAreOutOfBounds (rowIndex, columnIndex, array) {
    return (isOutOfBounds(rowIndex, array) || isOutOfBounds(columnIndex, array))
}

export default indicesAreOutOfBounds
