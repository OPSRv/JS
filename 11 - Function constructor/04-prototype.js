"use strict";

function CreateCar(manufactured, model, year, image) {
  this.manufactured = manufactured;
  this.model = model;
  this.year = year;
  this.image = image;
}

CreateCar.prototype.showInfoCar = function (element) {
  element.insertAdjacentHTML("beforeend", `<img src=./img/${this.image}>`);
  element.insertAdjacentHTML("beforeend", `<p>${this.manufactured}</p>`);
  element.insertAdjacentHTML("beforeend", `<p>${this.model}</p>`);
  element.insertAdjacentHTML("beforeend", `<p>${this.year}</p>`);
};

const car_1 = new CreateCar("Toyota", "RAW 4", 2018, "toyota.jpeg");
const car_2 = new CreateCar("Mercedes", "Vito", 2012, "mercedes.jpeg");
const car_3 = new CreateCar("Peugeot", "Expert", 2015, "peugeot.jpeg");
const car_4 = new CreateCar("Audi", "80", 1993, "audi.jpeg");

const placeholder1 = document.querySelector("#car_1");
const placeholder2 = document.querySelector("#car_2");
const placeholder3 = document.querySelector("#car_3");
const placeholder4 = document.querySelector("#car_4");

car_1.showInfoCar(placeholder1);
car_2.showInfoCar(placeholder2);
car_3.showInfoCar(placeholder3);
car_4.showInfoCar(placeholder4);

console.log(car_1);
