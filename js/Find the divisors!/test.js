var assert = require("assert");

function divisors(integer) {
  let array = [];
  for (let i = 2; i < integer; i++) {
    integer % i === 0 ? array.push(i) : "";
  }
  if (array.length == 0) {
    return `${integer} is prime`;
  }
  return array;
}


describe("Basic tests", () => {
  it("should divisor a number", function () {
    assert.equal((divisors(15), [3, 5]));
    assert.equal(divisors(12), [2, 3, 4, 6]);
    assert.equal(divisors(13), "13 is prime");
  });
});
