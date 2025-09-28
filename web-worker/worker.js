function add(...args) {
  let sum = 0;
  for (let num of args) {
    sum = num + sum;
  }
  return sum;
}

self.onmessage = (event) => {
  const { method, args } = event.data;
  if (method == "sum") {
    let result = add(...args);
    self.postMessage({ result });
  }
};
