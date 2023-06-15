function myFilter(arr, callback){
    let output =[]
    for (let i=0; i < arr.length; i++){
        if (callback(arr[i]))
            output.push(arr[i])
    }
    return output
}

let arr = [1, 2, 3, 4, 5]
function execute(val){
    return val*val < 10 ? true : false
}

console.log(myFilter(arr, execute))