const { machine } = require("os");

function longestSubstring(str){
    let maxLen = 0;
    let currLen = 0;
    let table = {};
    for (const e of str){
        // console.log("Iteration: " + e);
        if (table[e] === undefined){
            table[e] = e;
            currLen++;
        } else {
            // console.log('CurrLen: ' + currLen +  ', NEXT STRING')
            maxLen = maxLen < currLen ? currLen : maxLen;
            table = {};
            currLen = 1;
            table[e] = e;
            // console.log("maxLen = " + maxLen);
        }
    }
    return maxLen;
}

module.exports = longestSubstring;