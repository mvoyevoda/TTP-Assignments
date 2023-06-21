const functions = {
    reverseString(str){
        return str.split('').reverse().join('');
    },
    isPalindrome(str){
        return str === str.split('').reverse().join('') ? true : false;
    }
};

module.exports = functions;