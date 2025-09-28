const { time } = require("console");

class Animal {
  constructor(name) {
    this.name = name;
  }
  info() {
    console.log(`Animal name is: ${this.name}`);
  }
}

const dog = new Animal("dog");
dog.info();

class Bird extends Animal {
  constructor(name, type) {
    super(name);
    this.type = type;
  }
  move() {
    console.log(`this animal name is ${this.name} and type is ${this.type}`);
  }
}

let crow = new Bird("crow", "bird who can fly");
crow.info();
crow.move();

class Vehice {
  static type = "four wheeler";
  constructor(model) {
    this.model = model;
  }
  info() {
    console.log(`car model is: ${this.model}`);
  }
  static info() {
    console.log(`car type is: ${Vehice.type}`);
  }
}

const car = new Vehice("honda");
car.info();
Vehice.info();

// Private properites

class University {
  #licence;
  constructor(name, no) {
    this.name = name;
    this.#licence = no;
  }
  get Licence() {
    return this.#licence;
  }
  set Licence(no) {
    this.#licence = no;
  }
}

const du = new University("DU", "DA-9282");
console.log(du.name);
console.log(du.Licence);
du.Licence = "du-333";
console.log(du.Licence);
