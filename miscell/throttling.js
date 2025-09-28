// 👉 A function is allowed to run at most once in a given time interval — no matter how many times the event is triggered.

function throttle(fn, delay) {
  let last = 0;
  return function (...args) {
    let now = Date.now();
    if (now - last >= delay) {
      fn.apply(this, args);
      last = now;
    }
  };
}

function click() {
  console.log("hello world");
}

const handleButton = throttle(click, 10000);

const elem = document.getElementById("button");
elem.addEventListener("click", handleButton);
