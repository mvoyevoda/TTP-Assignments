function myEvery(arr, callback){
    for (let i=0; i < arr.length; i++){
        if (!callback(i)) return false
    }
    return true
}

let arr = [1, 2, 3, 4, 5]
function execute(val){
    return val < 6 ? true : false
}

console.log(myEvery(arr, execute))