function reverseString(str){
    if (str.split('').reverse().join('')) 
        return str.split('').reverse().join(''); 
    else 
        throw new Error("STRING REVERSAL FAILED");
}

module.exports = reverseString;