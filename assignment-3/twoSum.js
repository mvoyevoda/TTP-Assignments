function twoSum(arr, target) {
    let table = {};
    for (let [index, e] of arr.entries()) {
        if (table[e] !== undefined) 
            // return [table[e], e];
            return [table[e], index]
        else 
            table[target - e] = index;
    }
    throw new Error("No solution found");
}

module.exports = twoSum;