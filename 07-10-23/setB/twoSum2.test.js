const { twoSum } = require("./twoSum2.js");

describe("twoSum2 works", () => {
  //REGULAR TEST FOR REPEATING CHARACTERS
  test("twoSum([2,7,11,15]) => [1, 2]", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });
  test("twoSum([2,3,4], 6) => [1, 3]", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });
  //TEST WITHOUT REPEATING CHARACTERS
  test("twoSum([-1,0], -1) => [1, 2]", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });
});
