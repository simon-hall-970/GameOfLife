import indicesAreOutOfBounds from '../client/components/GameFunctions/indicesAreOutOfBounds'

test('indicesAreOutOfBounds', () => {
  const testArray = [[0,0,0],[0,0,0],[0,0,0]]
  const expecteds = {
    '-2': true,
    '-1': true,
    0: false,
    1: false,
    2: false,
    3: true,
    4: true
  }

  Object.keys(expecteds).forEach(input1 => {
    Object.keys(expecteds).forEach(input2 => {
      const expected = expecteds[input1] || expecteds[input2]
      const actual = indicesAreOutOfBounds(input1, input2, testArray)

      expect(actual).toBe(expected)
    })
  })
})
