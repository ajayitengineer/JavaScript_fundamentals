// hierachy of page
let elem = document.documentElement;
console.log(elem); //html

console.log(elem.children); // head,body

let elem2 = document.body;
console.log(elem2); // body
let elem3 = document.head;
console.log(elem3); //head

// By id name
const container = document.getElementById("container");
console.log(container);
console.log(typeof container); // object

//By class name
const container2 = document.getElementsByClassName("container");
console.log(container2);
console.log(typeof container2); // object(Html collection list)
console.log(container2.length);

//By tag name
const para = document.getElementsByTagName("p");
console.log(para);

//By query selctor
const query = document.querySelector("div > p");
console.log(query);

//By query selectorAll
const queryAll = document.querySelectorAll("div +p");
console.log(queryAll);

console.log(container.nodeType); // 1 (element node)
console.log(container.nodeName); // DIV

console.log(container.childNodes[1].nodeType); //8

// to access only element nodes we use children

const allElem = container.children;
console.log(allElem);

//next element sibling
const nextSibling = container.nextElementSibling;
console.log(nextSibling);

// previous element sibling
const prevSibling = container.previousElementSibling;
console.log(prevSibling);

//parent node

const parentNode = container.parentElement;
console.log(parentNode);

//first element child
const firstElement = container.firstElementChild;
console.log(firstElement);

// last Element child
const lastElement = container.lastElementChild;
console.log(lastElement);

// innerHTML
const innerHTML = container.innerHTML;
console.log(innerHTML);

// innerText (don't show display:none node)
const innerText = container.innerText;
console.log(innerText);

// outerHTML
const outerHTML = container.outerHTML;
console.log(outerHTML);

// textContent (show all nodes display:none also)
const textContent = container.textContent;
console.log(textContent);

//getAttribute (repalce all with new one)
const className = container.getAttribute("class");
console.log(className);

//setAttribute
container.setAttribute("class", "test");

//removeAttribute
setTimeout(() => {
  container.removeAttribute("class", "test");
}, 5000);

//classList
setTimeout(() => {
  console.log(container.classList);
}, 6000);

// add class
const container3 = document.getElementById("cont");
container3.classList.add("test");

// remove class
// container3.classList.remove("test");

// contains class
//container3.classList.contains("className");

const button = document.getElementById("toggle");

button.addEventListener("click", function (e) {
  button.classList.toggle("test");
});
