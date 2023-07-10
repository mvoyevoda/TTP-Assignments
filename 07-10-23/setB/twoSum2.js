const twoSum = (numbers, target) => {
  //two pointers, left and right
  let left = 0,
    right = numbers.length - 1;

  //while left is less than right
  while (left < right) {
    //sum = curLeft and curRight
    const sum = numbers[left] + numbers[right];

    //check if sum is greater than target, if yes
    //move right pointer one place to the left because
    //numbers are already sorted
    if (sum > target) {
      right--;
    }
    //vice versa if sum is less than target
    else if (sum < target) {
      left++;
    }
    //finally, return
    else {
      return [left + 1, right + 1];
    }
  }
};

module.exports = { twoSum };
