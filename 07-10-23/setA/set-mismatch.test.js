const solution = require('./set-mismatch')

const input = [1, 2, 2, 4]
const output = [2, 3]
test(input.toString(), () => {
  expect(solution(input)).toEqual(output)
})

