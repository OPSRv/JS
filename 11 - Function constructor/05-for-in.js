"use strict";

function Car(model) {
  this.model = model;
}

Car.prototype.places = 2;

Car.prototype.showInfoCar = function () {
  console.log(this.model);
  console.log("places: ", this.places);
};

const car_1 = new Car("Ferrari f40");
const car_2 = new Car("Porsche Carrera GT");

car_1.showInfoCar();
car_2.showInfoCar();

const obj = { one: 1, two: 2, tree: 3 };
for (let key in obj) {
  console.log("key: " + key + " " + " value: " + obj[key]);
}

for (let key in car_1) {
  if (car_1.hasOwnProperty(key)) {
    let value = car_1[key];
    console.log("key: " + key + " " + " value: " + value);
  }
}
