function moveZeros(nums){
    for (let i=0; i < nums.length; i++){
        if (nums[i] === 0){
            nums.splice(i, 1)
            nums.push(0)
        }
    }
}

let arr = [0,1,0,3,12]
moveZeros(arr)
console.log(arr)