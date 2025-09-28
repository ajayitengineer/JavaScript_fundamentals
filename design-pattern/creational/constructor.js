// Using function
function Car(model, color) {
  this.model = model;
  this.color = color;
  this.drive = function () {
    console.log(`${this.model} is driving`);
  };
}

const car1 = new Car("Honda", "Red");
car1.drive(); // Honda is driving

// Using ES6 class
class Bike {
  constructor(model, color) {
    this.model = model;
    this.color = color;
  }
  ride() {
    console.log(`${this.model} is riding`);
  }
}

const bike1 = new Bike("Yamaha", "Blue");
bike1.ride(); // Yamaha is riding
