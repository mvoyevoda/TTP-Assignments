function cutInHalfAndFloor(num) {
  if (typeof num === "number"){
    num /= 2
    num = Math.floor(num)
  }
  return num
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;