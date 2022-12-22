"use strict";

function User(name, age) {
  this.name = name;
  this.age = age;
}

function Car(model, year) {
  this.model = model;
  this.year = year;
}

const user = new User("Jack", 105);
const car = new Car("BMW", 2005);

console.log(typeof car);
console.log(car instanceof Car);
console.log(user instanceof Car);
console.log(car instanceof Object);

let date = new Date();
console.log(date instanceof Date);
console.log(date instanceof Object);
