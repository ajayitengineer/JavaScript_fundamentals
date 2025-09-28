console.log("start");
Promise.resolve().then(() => console.log("promise"));
setTimeout(() => {
  console.log("set time out");
}, 0);
console.log("end");
