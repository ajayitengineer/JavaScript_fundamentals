const person = { name: "John", city: "pune", state: "Mumbai" };

// A Proxy lets you wrap an object and intercept operations performed on it.
// You can control reading, writing, deleting properties, function calls, etc.
// It’s like a middleman between the object and the code using it.

let personProxy = new Proxy(person, {
  get(target, prop) {
    if (prop == "city") {
      throw new Error("you are not owner");
    }
  },
  set(target, prop, value) {
    target[prop] = value;
  },
});

console.log(personProxy.city);
personProxy.city = "kolkata";
console.log(personProxy);
console.log(person);
