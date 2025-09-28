// (Que.) What is Prototype in java script ?
// (Ans.) In JavaScript, prototype is a special object that every function and object has by default. It’s used for inheritance—allowing objects to share properties and methods.

// (Que.) What is the property descriptors ?
// (Ans.) Property descriptors define the behavior of a property in an object. The main descriptors are:

// writable – Determines if the property’s value can be changed.

// enumerable – Determines if the property shows up in loops like for...in or in Object.keys().

// configurable – Determines if the property can be deleted or if its descriptors can be modified.

// ✅ Optional extra note:
//When a property is created via Object.defineProperty, these descriptors default to false unless explicitly set.

// (1.) Function prototype

function Person(name) {
  this.name = name;
}

Person.prototype.greet = function (message) {
  console.log(`hello this is ${message} from ${this.name}`);
};

const user = new Person("Johh");
user.greet("Good morning all of you");

// (2.) Prototype Chain

let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__ === Object.prototype);
console.log(arr.__proto__.__proto__.__proto__ === null);

// we can define our own custom method on Array. (it is accessibe to on all every array )
Array.prototype.isEven = function () {
  let sum = 0;
  for (let num of this) {
    sum = sum + num;
  }
  return sum % 2 === 0 ? true : false;
};

console.log(arr.isEven());

let user1 = {
  role: "admin",
  city: "pune",
};

let user2 = {
  name: "paul",
  __proto__: user1,
};

console.log(user1 == user2); // false

let user3 = Object.create(user1, {
  name: {
    value: "denis rithce",
    writable: false,
    enumerable: true,
    configurable: true,
  },
  country: { value: "usa" },
});

Object.defineProperty(user3, "name", {
  writable: true,
});

user3.name = "paul";
console.log(user3.name);

const dict = Object.create(null, {
  id: { value: 1 },
  name: { value: "pune" },
  info: {
    value: function () {
      console.log(this.name);
    },
  },
});
dict.info();
// 👉 In short:
// Prototype is the mechanism by which JavaScript objects inherit features from one another.
