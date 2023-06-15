function myindexOf(arr, target){
    for (let i=0; i < arr.length; i++){
        if (arr[i] === target)
            return i
        else
            return -1
    }
}

let arr = [1, 2, 3, 4, 5]

console.log(myindexOf(arr, 5))
console.log(myindexOf(arr, 20))