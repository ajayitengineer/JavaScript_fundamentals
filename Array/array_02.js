//Transform Array.

const arr = [1, 2, 3, 4, 5, 6, 7, 8];

const squareArr = arr.map((item) => item * 4);

console.log(squareArr);

//Reverse

const reverse = arr.reverse();
console.log(reverse);

reverse.reverse();
console.log(arr);

// sort
let arr2 = [1, 2, 4, 15, 16];
let data = arr2.sort();
console.log("this is result");
console.log(data); // [1,15,16,2,4]; because items are sorted as an string

// to sort array elements as an number of array.

let sorted = arr2.sort((a, b) => a - b);

console.log(sorted);

//split convert string into array
let message = "hello world from the author of this page";
let mes = message.split(" ");
console.log(mes);

// join is reverse of split
let againMessage = mes.join(" ");
console.log(againMessage);

// reduce give an single result from an array.

let dataset = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let res = dataset.reduce((sum, current) => sum + current, 3); // here 3 is inital value
console.log(res);

let sumOfEvenplace = dataset.reduce((sum, current, index) => {
  if (index % 2 == 0) {
    sum = sum + current;
  }
  return sum;
});

console.log(sumOfEvenplace);

let sumofOddplace = dataset.reduce((sum, current, index) => {
  if (index % 2 != 0) {
    sum = sum + current;
  }
  return sum;
});

console.log(sumofOddplace);

//reduceRight do same but do from right to left.

// if we check some item full fill given condition then we will use some method.
// let suppose we have to check is there is any prime number in list of numbers

let checkPrime = (number) => {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) return false;
  }
  return true;
};

// now if we want to check if array of numbers has prime then how we can check.

let takeExample = [4, 6, 8, 31];

let test2 = takeExample.some(checkPrime);
console.log(test2);

// every element check each element of an array.

let learnEvery = [2, 4, 6, 8, 10, 12, 13];
// now we have to check that every element is even

let checkEven = (number) => (number % 2 == 0 ? true : false);

let checkEveryEven = learnEvery.every(checkEven);

console.log(checkEveryEven);
