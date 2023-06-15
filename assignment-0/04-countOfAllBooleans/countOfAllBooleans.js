function countOfAllBooleans(arr) {
  let c = 0
  for (const e of arr){
    if (typeof e === "boolean")
      c++
  }
  return c
}

// Do not edit this line;
module.exports = countOfAllBooleans;