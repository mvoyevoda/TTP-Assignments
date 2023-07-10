const solution = require('./missing-number')

test('[0, 2, 3, 4]', () => {
  const arr = [0, 2, 3, 4]
  const missingNumber = solution(arr)
  expect(missingNumber).toBe(1)
})

test('[0, 1]', () => {
  const arr = [0, 1]
  const missingNumber = solution(arr)
  expect(missingNumber).toBe(2)
})