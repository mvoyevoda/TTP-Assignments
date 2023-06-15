function countOfAllNumbersSmallerThanTarget(nums, target) {
  let c = 0
  for (const e of nums){
    if (typeof e === "number" && e < target)
      c++
  }
  return c
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;