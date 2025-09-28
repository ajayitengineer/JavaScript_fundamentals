// createElement

const elem = document.createElement("div");
const elemh1 = document.createElement("h1");
elemh1.innerText = "This heading insert by java script";

// appendChild
elem.appendChild(elemh1);
document.body.appendChild(elem);

// insertBefore

const container = document.getElementById("container");
document.body.insertBefore(elem, container); // new , reference

const addItem = document.getElementById("addItemBtn");
addItem.addEventListener("click", function () {
  const li = document.createElement("li");
  li.innerText = "I am a list";
  document.body.appendChild(li);
});

// remove
const removeItem = document.getElementById("removeItemBtn");
removeItem.addEventListener("click", function () {
  document.body.removeChild(document.body.lastElementChild);
});

//replace (replaceChild(old,new))

// fragements (temporay container for multiple elements when append in dom elements added but fragement disappear)

const list = document.createDocumentFragment();
const arr = ["hello", "world", "it", "is", "an", "example"];

arr.forEach((item) => {
  const li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});

document.body.appendChild(list);
