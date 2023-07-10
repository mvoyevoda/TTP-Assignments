// PSEUDOCODE
// 1. Use a hash table to find duplicate
// 2. Remove duplicate from array and save its value
// 3. Use summation formula to calculate expected sum
// 4. Find actual sum of array
// 5. Subtract expected sum and actual sum to find missing number
// 6. Return duplicate number and missing number as an array

function solution(arr){
  let table = {}
  let actualSum = 0
  let duplicate = 0
  arr.forEach((digit) => {
    if (table[digit] === undefined){ 
      table[digit] = digit 
      actualSum += digit
    } else { 
      duplicate = digit 
    }
  })
  const missingNumber = (arr.length*(arr.length+1)/2)-actualSum
  return [duplicate ? duplicate : null, missingNumber]
}

module.exports = solution
