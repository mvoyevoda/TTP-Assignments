const containMostWater = require('./containMostWater');

test('[1, 8, 6, 2, 5, 4, 8, 3, 7] --> 49', () => {
    expect(containMostWater([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
});

test(' [4, 3, 2, 1, 4] --> 16', () => {
    expect(containMostWater( [4, 3, 2, 1, 4])).toEqual(16);
});

test('[1, 2, 1] --> 2', () => {
    expect(containMostWater([1, 2, 1])).toEqual(2);
});