function countOfAllBooleansAndStrings(arr) {
  let c = 0
  for (const e of arr){
    if (typeof e === "boolean" || typeof e === "string")
      c++
  }
  return c
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;