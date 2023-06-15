function countOfAllIndexMatchingNumbers(nums) {
  let c = 0
  for (let i=0; i < nums.length; i++){
    if (nums[i] === i)
      c++
  }
  return c
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;