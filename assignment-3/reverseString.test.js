const reverseString = require('./reverseString')

// const string = 'Apple';
// const reverse = 'elppA'
// test('Reverse: ' + string, () => {
//     expect(reverseString(string)).toEqual(reverse);
// });

test('Reverse: hello', () => {
    expect(reverseString('hello')).toEqual('olleh');
});

test('Reverse: OpenAI', () => {
    expect(reverseString('OpenAI')).toEqual('IAnepO');
});

test('Reverse: racecar', () => {
    expect(reverseString('racecar')).toEqual('racecar');
});