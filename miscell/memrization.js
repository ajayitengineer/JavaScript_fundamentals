function memo(fn) {
  let cache = {};
  return function (...args) {
    let key = JSON.stringify(args);
    if (key in cache) {
      console.log("from cache");
      return cache[key];
    } else {
      let result = fn(...args);
      cache[key] = result;
      console.log("first time");
      return result;
    }
  };
}

function sum(a, b) {
  return a + b;
}

const fastFunction = memo(sum);

const data = fastFunction(1, 2, 3);
const data2 = fastFunction(1, 2, 3);
console.log(data);
