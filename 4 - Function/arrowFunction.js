"use strict";
//! Arrow Function
//! FunctionExpression == Arrow Function

//! FunctionExpression
const showAlert = function (text) {
  alert(text);
};
//showAlert("Hello");

//! Arrow Function
const showAlert2 = (text) => alert(text);
// showAlert2("Привіт! Arrow Function");

//! 2. Функція, яка повертає значення

const showDate = (day, month, year) => {
  if (day && month && year) {
    return `Введена дата ${day}.${month}.${year}`;
  }
};

// alert(showDate("06", "10", "2022"));

let day, month, year;

const inputDate = () => {
  day = +prompt("Введіть день");
  month = +prompt("Введіть місяць");
  year = +prompt("Введіть рік");
  return `Введена дата ${day}.${month}.${year}`;
};

alert(inputDate());
console.log(day, month, year);
