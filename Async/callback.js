// SetTimeout not return any value
// if we assign a value to setTimeout then it is timer id which we can later clear if not required.

let timerId = setTimeout(() => {
  console.log("hello world");
}, 2000);

console.log(timerId);
clearTimeout(timerId);
timerId = null; // good practise (useful in big app)

let intervalId = setInterval(() => {
  console.log("hello world this is set interval");
}, 1000);

setTimeout(() => {
  clearInterval(intervalId);
}, 5000);

// passing argumnet in setTimeout

setTimeout(
  (a, b) => {
    console.log(a + b);
  },
  2000,
  5,
  9
);

// setImmediate (Node.js only)
// Executes a function immediately after the current event loop cycle.
// Useful for deferring execution but not using a delay.
// Returns an immediate ID → can be cancelled with clearImmediate(id).

function fakeAsync(a, b, callback) {
  setTimeout(() => {
    let sum = a + b;
    if (sum > 0) {
      callback(null, sum);
    } else {
      callback(new Error("not valid"));
    }
  }, 5000);
}

fakeAsync(3, 6, (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});

function fakseAsyncPromise(a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let sum = a + b;
      if (sum > 0) {
        resolve(sum);
      } else {
        reject(new Error("not valid"));
      }
    }, 5000);
  });
}

fakseAsyncPromise(34, 9)
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("done");
  });
