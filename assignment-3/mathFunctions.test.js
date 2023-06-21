const functions = require('./mathFunctions')

test('Testing 5 + 4', () => {
    expect(functions.add(5, 4)).toEqual(9);
});

test('Testing 3 - 2', () => {
    expect(functions.subtract(3, 2)).toEqual(1);
});

test('Testing 10 * 3', () => {
    expect(functions.multiply(10, 3)).toEqual(30);
});

test('Testing 10 / 2', () => {
    expect(functions.divide(10, 2)).toEqual(5);
});
  