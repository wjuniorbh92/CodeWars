var assert = require("assert");

function createPhoneNumber(numbers) {
   let mask = '(xxx) xxx-xxxx';
   numbers.forEach((number) =>{
       mask=mask.replace('x', number)
   })
   return mask
}

describe("Basic tests", () => {
  it("should add numbers", function () {
    assert.equal(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
    assert.equal(
      createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]),
      "(111) 111-1111"
    );
    assert.equal(
      createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]),
      "(123) 456-7890"
    );
  });
});
