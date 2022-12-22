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
const car_3 = new Car("Lamborghini Aventador");
const car_4 = new Car("Ford Focus");

car_4.places = 4;

car_1.showInfoCar();
car_2.showInfoCar();
car_3.showInfoCar();
car_4.showInfoCar();
