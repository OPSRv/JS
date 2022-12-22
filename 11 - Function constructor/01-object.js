"use strict";

const carToyota = {
  manufactured: "Toyota",
  model: "RAW 4",
  year: 2018,
  image: "toyota.jpeg",

  showInfoCar: function (element) {
    element.insertAdjacentHTML("beforeend", `<img src=./img/${this.image}>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.manufactured}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.model}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.year}</p>`);
  },
};

const carPeugeot = {
  manufactured: "Peugeot",
  model: "Expert",
  year: 2015,
  image: "peugeot.jpeg",

  showInfoCar: function (element) {
    element.insertAdjacentHTML("beforeend", `<img src=./img/${this.image}>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.manufactured}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.model}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.year}</p>`);
  },
};

const carMercedes = {
  manufactured: "Mercedes",
  model: "Vito",
  year: 2012,
  image: "mercedes.jpeg",

  showInfoCar: function (element) {
    element.insertAdjacentHTML("beforeend", `<img src=./img/${this.image}>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.manufactured}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.model}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.year}</p>`);
  },
};
const carAudi = {
  manufactured: "Audi",
  model: "80",
  year: 1993,
  image: "audi.jpeg",

  showInfoCar: function (element) {
    element.insertAdjacentHTML("beforeend", `<img src=./img/${this.image}>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.manufactured}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.model}</p>`);
    element.insertAdjacentHTML("beforeend", `<p>${this.year}</p>`);
  },
};

const car_1 = document.getElementById("car_1");
carToyota.showInfoCar(car_1);
const car_2 = document.getElementById("car_2");
carPeugeot.showInfoCar(car_2);
const car_3 = document.getElementById("car_3");
carMercedes.showInfoCar(car_3);
const car_4 = document.getElementById("car_4");
carAudi.showInfoCar(car_4);
