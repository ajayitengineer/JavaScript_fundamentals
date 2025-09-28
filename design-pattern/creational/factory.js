class Car {
  constructor(model) {
    this.model = model;
  }
  drive() {
    console.log(`You can drive this car whose model is ${this.model}`);
  }
}

class Bike {
  constructor(model) {
    this.model = model;
  }
  ride() {
    console.log(`You can ride this bike whose model is ${this.model}`);
  }
}

class VehicleFactory {
  constructor(model, type) {
    this.model = model;
    this.type = type;
  }

  getObject() {
    // Use "this.type" instead of just "type"
    if (this.type.toLowerCase() === "bike") {
      return new Bike(this.model);
    } else {
      return new Car(this.model);
    }
  }
}

// Usage
let yamahaFactory = new VehicleFactory("Yamaha R15", "bike");
let yamaha = yamahaFactory.getObject();
yamaha.ride(); // ✅ You can ride this bike whose model is Yamaha R15

let hondaFactory = new VehicleFactory("Honda City", "car");
let honda = hondaFactory.getObject();
honda.drive(); // ✅ You can drive this car whose model is Honda City
