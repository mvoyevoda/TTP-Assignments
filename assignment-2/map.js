function myMap(arr, callback){
    let output =[]
    for (let i=0; i < arr.length; i++){
        output.push(callback(arr[i]))
    }
    return output
}

let arr = [1, 2, 3, 4, 5]
function execute(val){
    return val*val
}

console.log(myMap(arr, execute))