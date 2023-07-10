// PSUEDOCODE
// 1. Convert input array to hash table
// 2. Iterate over the set of all numbers that should exist in the input array
// 3. Return all instances of a number not existing in input array


function solution(arr){
  let table = {}
  let output = []
  const len = arr.length
  arr.forEach((digit) => {
      table[digit] = digit
  })
  for (let i=1; i <= len; i++){
    if (table[i] === undefined) output.push(i)
  }
  return output.sort()
}

module.exports = solution