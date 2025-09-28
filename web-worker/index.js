const worker = new Worker("./worker.js");

worker.postMessage({ method: "sum", args: [1, 2, 3, 4, 5, 6, 7] });

worker.onmessage = (event) => {
  console.log(event.data.result);
};
