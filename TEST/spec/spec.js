var myPow = require('../js/pow.js');

/*TEST NUMBER ONE*/
describe("myPow()", function() {
  it("Pow function", function() {

//prepare
	var myResult;

//act
	myResult = myPow.count(5, 2);

//assert
    expect(myResult).toBe(25);
  });
});



/*TEST NUMBER TWO*/

describe("powNotNull()", function() {
  it("Pow function is not a null", function() {

//prepare
	var myResult;

//act
	myResult = myPow.count(7, 9);

//assert
    expect(myResult).not.toBeNull();
  });
});



/*TEST NUMBER THREE*/

describe("powGreaterThen()", function() {
  it("Pow function is not a null", function() {

//prepare
	var myResult;

//act
	myResult = myPow.count(10, 3);

//assert
    expect(myResult).toBeGreaterThan(0);
  });
});



/*TEST NUMBER FOUR*/

describe("powIsNot()", function() {
  it("Pow function is not a some number", function() {

//prepare
	var myResult;

//act
	myResult = myPow.count(2, 3);

//assert
    expect(myResult).not.toBe(999);
  });
});