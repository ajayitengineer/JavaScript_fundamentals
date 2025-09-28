// Heigher order function
// function which able to take another function as argument or return another function.

function greetUser(name, formatter) {
  return formatter(name);
}

function uppercase(name) {
  console.log(name.toUpperCase());
}

greetUser("phill", uppercase);

// Pure functions
// function always return same output for same input.
// not influence by outer variables

// pure function
function sum(a, b) {
  return a + b;
}

// Impure function
let count = 0;
function(a, b) {
  return count + 1;
}

// Why use pure functions?

// Predictable & testable – easier to debug and write unit tests.

// Functional programming – foundational concept in FP.

// Safe to reuse – no unexpected side effects.