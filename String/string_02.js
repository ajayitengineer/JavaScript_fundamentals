// Regular expression

// let pattern = /hello/;
// let pattern2 = new RegExp("hello");

// // test
// // match
// // replace
// // search

// let message = "hello world i am java script";
// console.log(/world/.test(message));
// console.log(message.match(/hello/));
// console.log(message.replace(/hello/, "BYE"));
// console.log(message.search(/world/));

//special characrtors

// .  => SINGLE CHARACTOR
// \d => DIGIT
// \D => NON-DIGIT
// ^  => START WITH
// $  => ENDS WITH
// \w => WORD
// \W => NON WORD
// \s => WHITE SPACE
// \S => NON WHITE SPACE

// Quantifiers

// {n} => EXACTLY n
// {n,} => ATLEASET n
// {n,m} => BETWEEN n and m
//  * => 0 or more
// + => 1 or more
// ? => 0 or 1 (optional)

// Character Classes

// [abc] => match a,b or c
// [^abc] => match anything except a,b or c
// [a-z] => range lower case
// [A-Z] => range upper case
// [0-9] => range digit

// Groups & Alternation
// (abc) => group
// a|b => a or b

// Anchors & Boundaries

// ^abc => must starts with abc
// abc$ => must ends with abc
// \b => word boundry
// \B => non word boundry

// flags
// i => case senstive
// g => find(all matches)
// m => multiline

// Lookaheads & Lookbehinds
// (?=...) => positive lookaheads
// (?!...) => negative lookheads
// (?<=...) => positive lookbehind
// (?<!...) => negative lookbehind

let testString = "hello world this is john i have 200 USD";
console.log(testString.match(/\d+/));
console.log(testString.match(/D$/));

const no = 1234567890;
console.log(/^[6-9][0-9]{10}$/.test(no));

const m = "helloworld";
console.log(/[a-z]{10}$/.test(m));

const mobn = "+929876543210";
console.log(/^\+91[7-9][0-9]{10}$/.test(mobn));

const email = "john@gamil.com";
console.log(/\.@.[a-z]$/.test(email));
