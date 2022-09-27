"use strict";

const themeStyle =
  "color: yellow; font-style: italic; background-color: blue;padding: 5px";

const exampleStyle =
  "color: #002c6e; font-style: italic; background-color: #dfa000; padding: 5px";

//%c

console.log("%cIF - ELSE", themeStyle);
console.log("%cExample - 1", exampleStyle);
if (2 < 3) console.log("Відпрацює, коли умова буде виводить true");

console.log("%cExample - 2", exampleStyle);
/* 
const year = prompt("В якому році було опубліковно специфікацію ES6");
//? prompt - повертає рядок!
if (year == 2015) {
  console.log("Ви маєте рацію");
} else {
  console.log("Ви помиляєтесь");
}
*/

console.log("%cExample - 3", exampleStyle);
const trueExample = true;

if (!trueExample) {
  console.log("Блок коду, який буде виконаний, якщо умова 1 правильна");
} else if (!trueExample) {
  console.log(
    "Блок коду, який буде виконаний, якщо умова 1 хибна,а умова 2 істинна"
  );
} else {
  console.log("Блок коду, який буде виконаний, якщо умова 1 та умова 2, хибні");
}

console.log("%cExample - 4", exampleStyle);
/* 
let age = +prompt("Введіть скільки вам років");
if (age <= 3 && age > 0) {
  console.log("Привіт, малеча");
} else if (age < 18 && age > 3) {
  console.log("Привіт, тобі менше 18");
} else if (age >= 18 && age < 65) {
  console.log("Привіт, ви повнолітні");
} else if (age >= 65 && age <= 123) {
  console.log("Привіт, мої шанування");
} else {
  console.log("Який незвичний вік :)");
}
*/
console.log("%cExample - 5", exampleStyle);
if (0) {
  console.log("if (0)");
} else if (1) {
  console.log("else if(1)");
}

console.log("%cExample - 6", exampleStyle);
if (0 || null || undefined || NaN || false || "" || +"c4") {
  console.log("Умова НЕ виконається");
} else {
  console.log("Умова виконається !!!!");
}

console.log("%c TERNARY", themeStyle);
console.log("%cExample - 1", exampleStyle);
//condition ? iftrue : iffalse
/*
let age = +prompt("Введіть ваш вік");
let accessAllowed = age >= 18 ? true : false;
console.log(accessAllowed ? "Доступ дозволено" : "Доступ заборонено");
*/
console.log("%cExample - 2", exampleStyle);
/*
let company = prompt("Яка компанія створила JavaScript ?", "Netscape");
console.log(company == "Netscape" ? alert("Правильно") : alert("Неправильно"));
*/
console.log("%cExample - 3", exampleStyle);

/*
let age = +prompt("Введіть скільки вам років");

let message =
  age <= 3 && age > 0
    ? "Привіт, малеча"
    : age < 18 && age > 3
    ? "Привіт, тобі менше 1"
    : age >= 18 && age < 65
    ? "Привіт, ви повнолітні"
    : age >= 65 && age <= 123
    ? "Привіт, мої шанування"
    : "Який незвичний вік :)";

alert(message);
*/
console.log("%cExample - 4", exampleStyle);
let numberExample = 2 > 3 ? 5 : 6; // 6 - бо умова повертає false
console.log(numberExample);

console.log("%cSWITCH CASE", themeStyle);
//? перевіряє значення на строгу рівність - ===
//? якщо строгого порівняння не знайдено, то switch продовшує виконання case до найближчого breake, або до кінця конструкції switch
//? якщо жоден case не збігається виконується необов'язковий блок default

console.log("%cExample - 1", exampleStyle);
// let number = 2 + 2;
// let number = prompt("Введіть число");
/* 
switch (number) {
  case 3:
    console.log("Мало");
    break;
  case 4:
    console.log("Точно");
    break;
  case 5:
    console.log("Забагато");
    break;
  default: //необов'язковий блок
    console.log("Я не знаю таких значень");
}
*/
console.log("%cExample - 2", exampleStyle);
//Групування case
/*
let number = "4";
switch (number) {
  case "3":
  case 3:
    console.log("Мало");
    break;
  case "4":
  case 4:
    console.log("Точно");
    break;
  case "5":
  case 5:
    console.log("Забагато");
    break;
  default: 
    console.log("Я не знаю таких значень");
}
*/

console.log("%cExample - 3", exampleStyle);
/* 
let number = prompt("Введіть число");
switch (+number) {
  case 3:
    console.log("Мало");
    break;
  case 4:
    console.log("Точно");
    break;
  case 5:
    console.log("Забагато");
    break;
  default:
    console.log("Я не знаю таких значень");
}
*/

let age = +prompt("Введіть скільки вам років");

switch (true) {
  case age <= 3 && age > 0:
    console.log("Привіт, малеча");
    break;
  case age < 18 && age > 3:
    console.log("Привіт, тобі менше 18");
    break;
  case age >= 18 && age < 65:
    console.log("Привіт, ви повнолітні");
    break;
  case age >= 65 && age <= 123:
    console.log("Привіт, мої шанування");
    break;
  default:
    console.log("Який незвичний вік :)");
}
