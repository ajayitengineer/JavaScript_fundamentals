// Debouncing is a technique that ensures a function is only executed after a certain delay has passed since the last time it was invoked.
// No matter how many times the event fires during that delay, the function will only run once — after the timer ends.

function search(e) {
  console.log(e.target.value);
}
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const debounceHandler = debounce(search, 2000);

const input = document.getElementById("input");
input.addEventListener("input", debounceHandler);

// Now input event trigger after 2 seconds of non clicking.
// What happen if user click again and again.

/*
✅ What happens when user clicks/types continuously

First input → timer starts (setTimeout for 2s).

Second input (before 2s) → previous timer cleared, new one starts.

Third input → previous timer cleared, new one starts again.

… and so on.

👉 If the user never stops typing/clicking, the timer never gets a chance to finish, so the function never executes.
👉 Once the user stops interacting for 2 seconds, the last timer completes and the function runs only once with the most recent input.
*/

// 📝 Simplified Note

/* Debounce says: “I’ll wait until you’re done.
 If you keep talking (clicking/typing), I’ll reset my timer.
 I’ll only respond 2 seconds after you stop.”
 */
