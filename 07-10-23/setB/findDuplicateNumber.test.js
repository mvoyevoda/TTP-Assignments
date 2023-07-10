const { findDuplicate } = require("./findDuplicateNumber.js");

describe("containsMostWater works", () => {
  test("findDuplicate([1,3,4,2,2]) => 2", () => {
    expect(findDuplicate([1, 3, 4, 2, 2])).toEqual(2);
  });
  test("findDuplicate([3,1,3,4,2]) => 3", () => {
    expect(findDuplicate([3, 1, 3, 4, 2])).toEqual(3);
  });
});
