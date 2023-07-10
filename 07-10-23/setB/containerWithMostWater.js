const containsMostWater = (arr) => {
  let max = 1;
  let temp = arr.length;
  for (let i = 0; i < temp; i++) {
    for (let j = i + 1; j < temp; j++) {
      let distance = j - i;
      if (Math.min(arr[i], arr[j]) * distance > max) {
        max = Math.min(arr[i], arr[j]) * distance;
      }
    }
  }
  return max;
};

module.exports = { containsMostWater };
