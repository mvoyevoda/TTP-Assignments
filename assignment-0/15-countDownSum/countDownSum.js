class MySolution {
  countDownSum(num) {
    // let c = num
    // for (let i=num-1; i >= 1; i--){
    //   c += i
    // }
    // return c
    if (num === 1)
      return 1
    else
      return num + this.countDownSum(num-1)
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;