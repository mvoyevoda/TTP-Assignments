function isPalindrome(word) {
  let left_side = ""
  let right_side = ""
  for (let left = 0, right = word.length-1; left < right || left != right; left++, right--){
    left_side += word[left]
    right_side += word[right]
  }
  if (left_side === right_side)
    return true
  else
  return false
}

// Do not edit this line;
module.exports = isPalindrome;