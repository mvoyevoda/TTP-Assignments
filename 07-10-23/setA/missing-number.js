// PSUEDOCODE
// 1. Use summation formula to calculate sum of all digits inside array.
// 2. Iterate over array, adding each element's value to a total variable.
// 3. Return the difference of expexted sum and actual sum.

function solution(arr){
  // Summation Formula
  const expectedTotal = arr.length * (arr.length + 1) / 2
  let total = 0
  arr.forEach(digit => {    
    total += digit
  })
  return expectedTotal-total
}

module.exports = solution;