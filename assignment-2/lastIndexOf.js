function mylastIndexOf(arr, target){
    let found = -1
    for (let i=0; i < arr.length; i++){
        if (arr[i] === target)
            found = i
    }
    return found
}

let arr = [4, 3, 4, 4, 5]

console.log(mylastIndexOf(arr, 4))
console.log(mylastIndexOf(arr, 15))