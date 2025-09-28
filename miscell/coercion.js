// Coercion -> change one type of data type value into another types.

const num = 123;
const numString = String(num);
console.log(numString);
console.log(typeof numString);

const string = "hello world";
const strinNum = Number(string);
console.log(strinNum); // NaN

const string2 = "123a";
const string2Num = String(string2);
console.log(string2Num); // NaN

const boolean = true;
const booleanNum = Number(boolean);
console.log(booleanNum);

const string3 = "hello";
const string3Boolean = Boolean(string3);
console.log(string3Boolean);
console.log(typeof string3Boolean);

console.log("1" + 5);
console.log(1 + 1 + "5");
console.log(1 + "5" + 1);

// unary operator
const value = "123";
const value2 = +value;
console.log(value2);
console.log(typeof value2);

console.log(null == undefined);
console.log(null === undefined);

const value3 = "123a";
console.log(isNaN(value3));
console.log("end");
// Falsy values
const test = 0;
console.log(Boolean(test));
const test2 = -0;
console.log(Boolean(test2));
const test3 = null;
console.log(Boolean(test3));
const test4 = undefined;
console.log(Boolean(test4));
const test5 = NaN;
console.log(Boolean(test5));
const test6 = 0n;
console.log(Boolean(test6));
const test7 = false;
console.log(Boolean(false));

console.log(NaN == NaN);
console.log(NaN === NaN);

//TruthY values

const test8 = [];
console.log(Boolean(test8));
const test9 = {};
console.log(Boolean(test9));

// [] + []        // ""      (two arrays → strings → "")
// [] + {}        // "[object Object]"
// {} + []        // 0       ({} is block, +[] → 0)
// true + true    // 2
// "2" - "1"      // 1

console.log("2" - "1"); //1
console.log("2" * "4"); //8
console.log("8" / "2"); //4
console.log("8" % "2"); //0

let x;
console.log(x ?? "not defined");

const first = true;
const second = true;
const third = false;
const fourth = "hello world";

console.log(first || second || third || fourth);
console.log(fourth || first || second || third);
console.log(first && second && third);
console.log(first && second && fourth);

const emptyArray = [];
const emptyArray2 = [];
const emptyArray3 = emptyArray + emptyArray2;
console.log(emptyArray3);
console.log(typeof emptyArray3);

const emptyObject = {};
const emptyObject2 = {};
const emptyObject3 = emptyObject + emptyObject2;
console.log(emptyObject3);
console.log(typeof emptyObject3);

const emptyObjArray = emptyArray + emptyObject;
console.log(emptyObjArray);
console.log(typeof emptyObjArray);

const boolean1 = true;
const boolean2 = true;
const boolean3 = boolean1 + boolean2;
console.log(boolean3);
console.log(typeof boolean3);
