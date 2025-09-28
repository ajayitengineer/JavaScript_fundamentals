//An object is an iterator if it has a .next() method that returns an object with { value, done }.
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let gen = arr[Symbol.iterator]();

function* generator() {
  for (let num of arr) {
    yield num;
  }
}

let data = generator();
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());
console.log(data.next());

const dataSet = [
  {
    name: "John",
    city: "Pune",
  },
  {
    name: "John2",
    city: "Pune2",
  },
  {
    name: "John3",
    city: "Pune3",
  },
  {
    name: "John4",
    city: "Pune4",
  },
  {
    name: "John5",
    city: "Pune5",
  },
  {
    name: "John6",
    city: "Pune6",
  },
  {
    name: "John7",
    city: "Pune7",
  },
  {
    name: "John8",
    city: "Pune8",
  },
];

let iter = dataSet[Symbol.iterator]();

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
