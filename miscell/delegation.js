const list = document.getElementById("list");
list.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    console.log(e.target.innerText);
  }
});
