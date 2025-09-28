/*
There are two types of data type in java script.
(1.) Primitive data types (immutable) copy be value
-- Number
-- String
-- Boolean
-- null
-- Undefined
-- BigInt
-- Symbol
(2.) Non-primitive data types (mutable) copy by reference (all non primitives types are special kind of object)
-- Object 
-- Array
-- set
-- map
-- weakMap
-- weakSet
*/

// Number
let num = 1234;
let num2 = num;
console.log(num2 === num);
num2 = 33;
console.log(num); // Immutable

// String
let str = "hello world";
let str2 = str;
console.log(str2 === str);
str2 = "bye world";
console.log(str);
console.log(str === str2);

// Boolean
let flag = true;

// undefined
let x;
console.log(x);

// null
let y = null;
console.log(y);

console.log(null == undefined);
console.log(null === undefined);

// BigInt
let big = 123456789n;
let newBig = big + 1n;

console.log(big); // 123456789n
console.log(newBig); // 123456790n

// Symbol
// A primitive data type introduced in ES6 (ES2015).

// It creates a unique identifier that cannot be duplicated.

// Even if two symbols have the same description, they are different.

const id = Symbol("id");

// set
// A Set is a collection of unique values.
// No duplicates allowed.
// Values can be of any type (primitive or object).
//Maintains insertion order.

let data = new Set([1, 3, 4]);
console.log(data.has(3));
data.add(3);
data.delete(3);
console.log(data);

let arr = [1, 2, 3, 4, 5, 2, 5, 3];
let data2 = new Set([...arr]);
console.log(data2);

// Map
// 👉 A Map is a collection of key-value pairs.
// Unlike objects, keys can be anything (objects, functions, primitives).
// Maintains insertion order.
let map = new Map();

map.set("name", "Ajay");
map.set(1, "one");
map.set({ id: 101 }, "object key");

console.log(map.get("name")); // Ajay
console.log(map.get(1)); // one

console.log(map.has("name")); // true
map.delete(1);

for (let [key, value] of map) {
  console.log(key, ":", value);
}
// "name" : Ajay
// { id: 101 } : object key

//WeakSet;

// 👉 Similar to Set, but with two differences:

// Only stores objects (not primitives).

// Objects are held weakly (if object has no other reference, it is garbage collected).

let ws = new WeakSet();
let obj1 = { name: "Ajay" };
let obj2 = { age: 25 };

ws.add(obj1);
ws.add(obj2);

console.log(ws.has(obj1)); // true

obj1 = null; // object eligible for garbage collection
// ws will automatically remove it (no manual delete needed)
// WeakMap

// 👉 Similar to Map, but:

// Only allows objects as keys (not primitives).

// Keys are weakly held (garbage collected if object has no other reference).

Example:
let wm = new WeakMap();
let obj = { id: 1 };

wm.set(obj, "metadata");
console.log(wm.get(obj)); // metadata
console.log(wm.has(obj)); // true

obj = null; // object is garbage collected
// WeakMap automatically removes the entry