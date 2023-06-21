function containMostWater(arr){
    let maxArea = 0;
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        const h = Math.min(arr[left], arr[right]);
        const w = right - left;
        const area = h * w;
        maxArea = Math.max(maxArea, area);

        if (arr[left] < arr[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

module.exports = containMostWater;