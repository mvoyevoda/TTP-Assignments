const longestSubstring = require('./longestSubstring');

test('abcabcbb --> 3', () => {
    expect(longestSubstring('abcabcbb')).toEqual(3);
});

test('bbbbb --> 1', () => {
    expect(longestSubstring('bbbbb')).toEqual(1);
});

test('pwwkew --> 3', () => {
    expect(longestSubstring('pwwkew')).toEqual(3);
});