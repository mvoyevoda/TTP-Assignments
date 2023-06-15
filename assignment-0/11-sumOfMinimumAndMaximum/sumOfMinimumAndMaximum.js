function sumOfMinimumAndMaximum(nums) {
  let min = nums[0]
  let max = nums[0]
  for (const e of nums){
    //find max
    if (e > max)
      max = e
    //find min
    if (e < min)
      min = e
  }
  return max + min
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;