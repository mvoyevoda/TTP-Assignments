class myObject {
    constructor(squareLimit){
        this.myObject = {};
        for (let i=1; i <= squareLimit; i++){
            this.myObject[i] = i*i
        }
    }
    myKeys(){
        let output = []
        for (let key in this.myObject){
            output[output.length] = key
        }
        return output
    }
}

const obj1 = new myObject(5)
console.log(obj1.myKeys())