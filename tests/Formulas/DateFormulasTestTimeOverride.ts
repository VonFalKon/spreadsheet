import {
  NOW,
  DATEVALUE,
  TODAY
} from "../../src/Formulas/Date"
import * as ERRORS from "../../src/Errors";
import {
  assertEquals,
  catchAndAssertEquals,
  test
} from "../utils/Asserts"


// WARNING: Locking in Date by overriding prototypes.
function lockDate(year, month, day, hour, minute, second) {
  var d = new Date(year, month, day, hour, minute, second);
  Date.prototype.constructor = function () {
    return d;
  };
  Date.now = function () {
    return +(d);
  };
}

test("NOW", function(){
  lockDate(2012, 11, 10, 4, 55, 4);
  assertEquals(NOW().toNumber(), DATEVALUE("Dec 10 2012"));
  lockDate(1999, 11, 10, 4, 55, 4);
  assertEquals(NOW().toNumber(), DATEVALUE("Dec 10 1999"));
  lockDate(1999, 9, 22, 4, 55, 4);
  assertEquals(NOW().toNumber(), DATEVALUE("Oct 22 1999"));
  lockDate(1944, 1, 2, 1, 11, 55);
  assertEquals(NOW().toNumber(), DATEVALUE("Feb 2 1944"));
  catchAndAssertEquals(function() {
    NOW(12);
  }, ERRORS.NA_ERROR);
});


test("TODAY", function(){
  lockDate(2012, 11, 10, 4, 55, 4);
  assertEquals(TODAY().toNumber(), DATEVALUE("Dec 10 2012"));
  lockDate(1999, 11, 10, 4, 55, 4);
  assertEquals(TODAY().toNumber(), DATEVALUE("Dec 10 1999"));
  lockDate(1999, 9, 22, 4, 55, 4);
  assertEquals(TODAY().toNumber(), DATEVALUE("Oct 22 1999"));
  lockDate(1944, 1, 2, 1, 11, 55);
  assertEquals(TODAY().toNumber(), DATEVALUE("Feb 2 1944"));
  catchAndAssertEquals(function() {
    TODAY(12);
  }, ERRORS.NA_ERROR);
});