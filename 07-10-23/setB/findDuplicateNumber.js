const findDuplicate = (nums) => {
  let i = 0;
  //while i < arr length
  while (i < nums.length) {
    let correctIndex = nums[i] - 1;

    if (nums[i] != i + 1) {
      if (nums[i] != nums[correctIndex]) {
        [nums[i], nums[correctIndex]] = [nums[correctIndex], nums[i]];
      } else {
        return nums[i];
      }
    } else {
      i++;
    }
  }
  return -1;
};

module.exports = { findDuplicate };
