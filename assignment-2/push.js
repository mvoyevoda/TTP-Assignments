function myPush(arr, value){
    arr[arr.length] = value
}

let arr = [1, 2, 3, 4, 5]
myPush(arr, "test")
console.log(arr)