// An array is collection of data.

const cars = ['Bmw', 'Nisan', 'Honda', 'Hyundai'];

// An array can store data of any type.
const values = ['bike', true, { name: 'BMW' }];

// Reterive element of an array.
console.log(cars[1]) // Nisan

// we can also use 'at' in new versions of java script.
console.log(cars.at(1)) // Nisan 

// Length of array.
console.log(cars.length) // 4

// How to get last element of an array.
console.log(cars.at(-1)) // Hyundai

//Change elements in array
cars[1] = "Maruti";
console.log(cars) // [ 'Bmw', 'Maruti', 'Honda', 'Hyundai' ]

//Insertion and deletion from array 

// Push

const a = cars.push('Maruti'); // Return array length after insertion  of new element.
console.log(a); // 5 
console.log(cars);

// Pop
const b = cars.pop(); // Return deleted element 
console.log(b); // Maruti
console.log(cars.length) // 4
console.log(cars);  // [ 'Bmw', 'Maruti', 'Honda', 'Hyundai' ]

// Shift
const c = cars.shift(); // Remove element from start
console.log(cars.length); // 3 -> Size decrease by 1  
console.log(c); // Return deleted element
console.log(cars); // [ 'Maruti', 'Honda', 'Hyundai' ]

//Unshift
const d = cars.unshift('Kia'); // Add element at begining.
console.log(d); //4 -> Return array length after insertion of new element.
console.log(cars);


cars[24] = 'test';
console.log(cars.length); // 25 

const cars2 = ['Bmw', 'Nisan', 'Honda', 'Hyundai'];

//Loops
// for loop 
for (let i = 0; i < cars2.length; i++) {
    console.log(cars[i]);
}

// of method 
for (let car of cars2) {
    console.log(car);
}

// As array are type of object so for in also work in array

for (let key in cars2) {
    console.log(`${key} and its value is ${cars[key]}`);
}

//More about length property of array 
// -- Length is writable 
// -- We can truncate the array 

let arr = [1, 2, 3, 4, 5];
arr.length = 3;
console.log(arr);
arr.length = 10;
console.log(arr[8]); // value will be undefined.
console.log(arr);

// There is one more way to create array
let newArr = new Array();
console.log(newArr);
console.log(newArr.length);

let newArr2 = new Array(3);
console.log(newArr2.length);
