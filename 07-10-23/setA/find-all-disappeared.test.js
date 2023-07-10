const solution = require('./find-all-disappeared')

let input = [4,3,2,7,8,2,3,1]
let output = [5, 6]
test(input.toString(), () => {
  expect(solution(input)).toEqual(output)
})

input = [1,1]
output = [2]
test(input.toString(), () => {
  expect(solution(input)).toEqual(output)
})