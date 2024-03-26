let arr = ["india", "nepal", "sri lanka", "russia"];

// How to delete an element from an array.
delete arr[0];
console.log(arr);
console.log(arr.length); // still array length is as Original
// console.log(arr[0]); // undefined

// // Splice
let arr1 = ["india", "nepal", "sri lanka", "russia"];

let test = arr1.splice(0, 1);
console.log(test);
console.log(arr1);

//Splice can replace also
let arr2 = ["india", "nepal", "sri lanka", "russia"];
let check = arr2.splice(0, 1, "china");

console.log(check);
console.log(arr2);

// Slice also remvoe element
let arr3 = ["india", "nepal", "sri lanka", "russia"];

let wow = arr3.slice(1, 3); //
console.log(wow);
console.log(arr3);

//Concat
let first = ["first", "second", "third"];
let second = ["india", "nepal", "maymar"];

let third = first.concat(second);
console.log(third);

let data = [1, 2, 3, 4, 5, 6];

data.forEach((item) => {
  console.log(item);
});

let check1 = data.indexOf(2);
console.log(check1);

let check2 = data.includes(2);
console.log(check2);

let res = data.find((item) => 2);
console.log(res);

let results = [
  {
    id: 1,
    name: "ajay",
  },
  {
    id: 2,
    name: "meenu",
  },
];

let findResult = results.find((item) => item.id >= 1);
console.log(findResult);

let findResult1 = results.filter((item) => item.id >= 1);
console.log(findResult1);
