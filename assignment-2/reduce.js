function myReduce(arr, callback, initialVal){

    if (arr.length === 0){
        throw new Error("Array is empty")
    }

    let accumulator = initialVal
    for (let i=0; i < arr.length; i++){
        accumulator = callback(accumulator, arr[i])
    }
    return accumulator
    
}

// let arr = [1, 2, 3, 4, 5]
// function execute(accumulator, val){
//     return accumulator + accumulator % val
// }

// console.log(myReduce(arr, execute, 10))

let arr = [1, 2, 3, 4, 5]
function execute(accumulator, val){
    return accumulator + val
}
let emptyArr = []
console.log(myReduce(emptyArr, execute, 2))