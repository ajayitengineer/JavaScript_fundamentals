// Decorator not useful so much in plan js but in Typescript and angular works good.

// In context of plain js -> decorator is HOF (Heigher order function)

function logger(fn) {
  return function (...args) {
    console.log(`calling function with ${args}`);
    const result = fn.apply(this, args);
    return result;
  };
}

function sum(...args) {
  let sum = 0;
  for (let num of args) {
    sum = sum + num;
  }
  return sum;
}

const data = logger(sum);
const result = data(1, 2, 3);
console.log(result);
