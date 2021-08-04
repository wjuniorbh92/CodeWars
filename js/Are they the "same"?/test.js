var assert = require("assert");

function comp(array1, array2) {
  if (array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  return array1
    .map((i) => {
      console.log(i * i);
      return i * i;
    })
    .every((val, i) => val === array2[i]);
}

describe("Tests", () => {
  it("comp", () => {
    a1 = [121, 144, 19, 161, 19, 144, 19, 11];
    a2 = [
      11 * 11,
      121 * 121,
      144 * 144,
      19 * 19,
      161 * 161,
      19 * 19,
      144 * 144,
      19 * 19,
    ];
    assert.equal(comp(a1, a2), true);
    assert.equal(
      comp([1, 1, 9, 9, 1, 7, 0, 8, 2, 3], [4, 1, 81, 1, 64, 0, 1, 81, 49, 9]),
      true
    );
  });
});
