const functions = require('./stringFunctions');

test('Reverse Apple#', () => {
    expect(functions.reverseString('Apple#')).toEqual('#elppA');
});

test('Is "RACECAR" a palindrome?', () => {
    expect(functions.isPalindrome('RACECAR')).toEqual(true);
});
