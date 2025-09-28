// 1️⃣ Event Propagation Phases

// When an event happens, it goes through three phases:

// (1.) Capturing Phase (trickling down)

// Event starts from the root (document) and travels down the DOM tree to the target element.

// Rarely used directly in most JS code.

// You can listen in this phase with addEventListener("click", handler, true).

// (2.) Target Phase

// Event reaches the actual element that triggered it.

// This is when most event listeners normally fire.

// (3.)Bubbling Phase (trickling up)

// Event travels up the DOM tree from the target element to the root (document).

// Most default behavior uses this phase (addEventListener("click", handler) without the third param).

// By default propgation happens in bubblin way (false).
// If we want that propgation happen in captruing then set to true

const outerDiv = document.getElementById("outer");
const innrerDiv = document.getElementById("inner");
const target = document.getElementById("target");

function outerDivClick() {
  console.log("outer div clicked");
}

function innerDivClick() {
  console.log("inner div clicked");
}

function targetClick(e) {
  //e.stopPropagation(); // To stop propagation.
  console.log("target  clicked");
}

outerDiv.addEventListener("click", outerDivClick, true); // Capturing
innrerDiv.addEventListener("click", innerDivClick, true); // capturing
target.addEventListener("click", targetClick, true); // capturing

// Event delgation (Instead of attching event to every child we attach it to parent and then it follow bubbling and we capture target)
