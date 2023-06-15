function myEach(data, callback){
    //check if data is an array
    if (Array.isArray(data)){
        for (let i=0; i < data.length; i++){
            callback(data[i]);
        }
    //check if data is an object
    } else if (typeof data === "object"){
        for (let i=0; i < Object.entries.length; i++){
            callback(Object.entries[i]);
        }
    }
}

let arr = [1, 2, 3, 4, 5]
function execute(val){
    console.log(val)
}

myEach(arr, execute)
//efefefe