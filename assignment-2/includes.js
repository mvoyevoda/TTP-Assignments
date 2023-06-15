function myIncludes(arr, target){
    for (let i=0; i < arr.length; i++){
        if (arr[i] === target) return true
    }
    return false
}

let arr = [1, 2, 3, 4, 5]

console.log(myIncludes(arr, 0))