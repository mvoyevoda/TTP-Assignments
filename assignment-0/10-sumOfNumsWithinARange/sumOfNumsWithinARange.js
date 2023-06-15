function sumOfNumsWithinARange(nums, start, end) {
  let c = 0
  for (const e of nums){
    if (e >= start && e <= end)
      c++
  }
  return c
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;