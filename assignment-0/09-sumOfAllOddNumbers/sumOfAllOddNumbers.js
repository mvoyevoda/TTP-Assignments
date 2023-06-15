function sumOfAllOddNumbers(nums) {
  let c = 0
  for (const e of nums){
    if (e % 2 !== 0)
      c++
  }
  return c
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;