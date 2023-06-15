function mySome(arr, callback){
    for (let i=0; i < arr.length; i++){
        if (callback(i)) return true
    }
    return false
}

let arr = [1, 2, 3, 4, 5]
function execute(val){
    return val % 2 !== 0
}

console.log(mySome(arr, execute))