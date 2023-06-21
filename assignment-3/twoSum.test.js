const twoSum = require('./twoSum');

// test('input=[5, 3, 8, 4, 1, 2], target=4', () => {
//     expect(twoSum([5, 3, 8, 4, 1, 2], 4)).toEqual([3, 1])
// });

test('input=[2, 7, 11, 15], target=9', () => {
    expect(twoSum([2, 7, 11, 15], 9, 9)).toEqual([0, 1])
});

test('input=[3, 2, 4], target=6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
});

test('input=[-1, -2, -3, -4, -5], target=-8', () => {
    expect(twoSum([-1, -2, -3, -4, -5], -8)).toEqual([2, 4])
});