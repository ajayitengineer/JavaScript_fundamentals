function promise() {
  return Promise.resolve("hello world");
}

promise()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// Promise has 3 statges
// (1.) Pending
// (2.) Resolved / fullfilled
// (3.) Rejected
// 👉 After a promise is either fulfilled or rejected, it is considered Settled.

function fakePromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sum = a + b;
      if (sum > 0) {
        resolve("Valid input");
      } else {
        reject("not valid");
      }
    }, 2000);
  });
}

fakePromise(3, 4)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("promise is setteld");
  });

// Promise APIs for Parallel Execution
// JavaScript provides 4 main static methods to handle multiple promises in parallel:
// (1,) Promise.all();
// (2.) Promise.allSettled();
// (3.) Promise.rece();
// (4.) Promise.any();

const promise1 = new Promise((resolve, reject) => {
  resolve("promise 1");
});
const promise2 = new Promise((resolve, reject) => {
  resolve("promise 2");
});
const promise3 = new Promise((resolve, reject) => {
  resolve("promise 3");
});
const promise4 = new Promise((resolve, reject) => {
  reject("promise 4 rejected");
});

// All promise should be fullfilled.
(async function test() {
  try {
    let result = await Promise.all([promise1, promise2, promise3]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

// Settlement of all promises.
(async function test2() {
  try {
    let result = await Promise.allSettled([
      promise1,
      promise2,
      promise3,
      promise4,
    ]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

// First settle promise
(async function test3() {
  try {
    let result = await Promise.race([promise4, promise2, promise3, promise1]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

// First fullfilled promise.
(async function test4() {
  try {
    let result = await Promise.any([promise4, promise2, promise3, promise1]);
    console.log(result);
  } catch (err) {
    console.log(err);
  }
})();

// What is Promisification?

// 👉 Promisification means converting a function that uses callbacks (especially the Node.js style (err, data) => {} callbacks) into a function that returns a Promise.
const { promisify } = require("util");
const fs = require("fs");

const readFileAsync = promisify(fs.readFile);

async function run() {
  try {
    let content = await readFileAsync("file.txt", "utf8");
    console.log(content);
  } catch (err) {
    console.error(err);
  }
}

run();

function addAsync(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sum = a + b;
      if (sum >= 0) resolve(sum);
      else reject(new Error("Invalid sum"));
    }, 1000);
  });
}

// What is Promise Chaining?

// 👉 Promise chaining means using .then() one after another so that the output of one async operation becomes the input for the next.
// It helps avoid callback hell and keeps async flows readable.

addAsync(2, 3) // returns 5
  .then((result) => {
    console.log("First:", result);
    return addAsync(result, 4); // pass result forward
  })
  .then((result) => {
    console.log("Second:", result);
    return addAsync(result, -20); // this will reject
  })
  .then((result) => {
    console.log("Third:", result);
  })
  .catch((err) => {
    console.error("Error caught:", err.message);
  })
  .finally(() => {
    console.log("Done!");
  });
