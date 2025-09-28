// ============================
// 1️⃣ Functions Types
// ============================

// Regular function (function declaration / statement)
function regular() {
  console.log("This is a regular function");
}

// Arrow function (function expression)
const arrow = () => {
  console.log("This is an arrow function");
};

// ----------------------------
// Function Statement vs Expression vs Declaration
// ----------------------------

// Function declaration (statement)
// Can be called before declaration (hoisted)
function greet() {
  console.log("Hello!");
}
greet();

// Function expression
// Assigned to a variable, not hoisted
const first = function () {
  console.log("This is a function expression");
};
first();

// Arrow functions are always function expressions
const second = () => console.log("This is an arrow function expression");

// ----------------------------
// 2️⃣ IIFE (Immediately Invoked Function Expression)
// ----------------------------
(function () {
  console.log("Hello world, this is IIFE");
})();

// ----------------------------
// 3️⃣ Closures
// A function with access to its lexical scope even after outer function has finished
// ----------------------------
function outer(message) {
  return function (name) {
    console.log(`${message} for ${name}`);
  };
}

let result = outer("Hello world");
result("John"); // Hello world for John
result("Phill"); // Hello world for Phill

// ----------------------------
// 4️⃣ Currying
// Convert a function f(a,b,c) to f(a)(b)(c)
// ----------------------------
function outerMost(a) {
  return function outer(b) {
    return function inner(c) {
      console.log(`${a} ${b} ${c}`);
    };
  };
}

let data = outerMost("Hello");
data("World")("Phill"); // Hello World Phill

// ----------------------------
// 5️⃣ Callback Functions
// Functions passed as arguments to other functions
// ----------------------------
function test(a, b, callback) {
  console.log(`a and b are ${a} ${b}`);
  callback();
}

function second() {
  console.log("This is the second function");
}

test(3, 4, second);

// ============================
// Summary Notes:
// - Function Declaration = hoisted, has name, dynamic this
// - Function Expression = assigned to variable, not hoisted
// - Arrow Function = always expression, lexical this
// - IIFE = runs immediately after definition
// - Closure = function + lexical scope
// - Currying = nested functions to handle multiple arguments one by one
// - Callback = function passed as argument
// ============================
