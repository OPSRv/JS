"use strict";
let btn = document.querySelector("#obj");

//! Object

//? Приклад створення об"єкту
//*1
let person = new Object();
//*2
let person2 = {};

//виводимо створені об"єкти
console.log(person);
console.log(person2);

//? Приклад додавання значень

//*1 - приклад додавання ключ - значення
person["name"] = "Olexandr";
person["age"] = 23;
person["sex"] = "m";
//Є можливість додавати ключі з пробілами
person["Hello name"] = "Hello";
// console.log(person);
// console.log(person["Hello name"]);
// console.log(person["name"]);

//*2 - - приклад додавання
person2.name = "Sergiy";
person2.age = 24;
person2.sex = "m";

// console.log(person2);
// console.log(person2.name);

//*3 - приклад додавання значень
let user = {
  name: "Kyrylo",
  age: "25",
  sex: "M",
};
console.log(user);

//*4 - приклад додавання значень
let carName = "Audi";
let color = "gray";
let model = 80;
let years = 1988;

let car = {};
car.name = carName;
car.color = color;
car.model = model;
car.years = years;
//console.log(car);
//console.log(typeof car.years, typeof car.name);

//? Приклад видалення значень
delete person["age"];
//console.log(person);

delete car.years;
//console.log(car);

//? Перевірка наявності властивості всередині об"єкта
let userName = {};
userName.name = "Marta";
userName.car = car;
console.log(userName);
//userName.age = "18";

if ("age" in userName) {
  console.log("ключ age існує");
} else {
  console.log("ключ age не існує");
}

//? Перегляд властивостей об"єкта
console.log("___________________________");
let programmingLanguage = {
  name: "JavaScript",
  paradigm:
    "	Multi-paradigm: event-driven, functional, imperative, procedural, object-oriented programming",
  designed:
    "Brendan Eich of Netscape initially; others have also contributed to the ECMAScript standard",
  previewRelease: "ECMAScript 2022",
};

for (let key in programmingLanguage) {
  //виводимо ключі об"єкта
  console.log(key);
  //виводимо значення ключів
  console.log(programmingLanguage[key]);

  console.log(key + ":" + programmingLanguage[key]);
}
