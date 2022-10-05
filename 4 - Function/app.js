"use strict";

//? Function Declaration

//! 1. Оголошення функції
/*
function functionName(params*) {
    function body
}
*/
//! 2. Назва функції
// create
// check
// show
// get
// calc
// is

//! 3. Функція виводу повідомлення
function showMessage() {
  console.log("Привіт це фукція, яка виводить повідомлення");
}
//showMessage();

//! 4. Вивід на екран
function showFiveBlocks() {
  for (let i = 1; i <= 5; i++) {
    document.write(
      "<h5 style='color: purple; margin: 2px;'> Block - " + i + "</h5>"
    );
  }
}
//showFiveBlocks();
//showFiveBlocks();

//! 5. Вкладенність функції
function calcSumm() {
  let num1, num2;

  function getNumberOne() {
    num1 = 25;
  }

  function getNumberTwo() {
    num2 = 34;
  }

  getNumberOne();
  getNumberTwo();

  let summ = num1 + num2;
  document.write(summ);
  console.log(summ);
}
calcSumm();
// getNumberOne();
// getNumberTwo();

//! 5.1 Вкладенність функції

let x = 13;

//console.log(Boolean(x));
//console.log(Number(x));
//console.log(String(x));
if (x < 50) {
  function showNumber() {
    console.log(x);
  }
  showNumber();
}
//showNumber(); //виклик функції у строгому режимі видасть помилку

//! 6. Використання зовнішніх змінних
let year;
function checkYear() {
  year = +prompt("Введіть рік і ми дізнаємося чи він високосний");
  alert(
    year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
      ? "Високосний"
      : "Не високосний"
  );
}
//alert(year); year - is not defined
//checkYear();
//alert(year);

//! 7. Функції з аргументами
function showMessageWithArgument(arg) {
  console.log(arg);
}
showMessageWithArgument("Привіт, я функція showMessageWithArgument");

//! 7.1 Функції з аргументами
function showMessageWithArgumentTwo(arg1, arg2, arg3) {
  console.log(arg1, arg2, arg3);
}
showMessageWithArgumentTwo("arg1");
showMessageWithArgumentTwo(2, "arg2", true);

//! 8. Функції з аргументами із значеннями по замовчуванню - default arguments

function calcMultiply(a, b = 2) {
  let result = a * b;
  console.log(result);
}
calcMultiply(10);
calcMultiply(10, 100);

//! 9. Фунції із зворотним викликом - callback

function calcSummMode(numberOne, numberTwo, more, less) {
  let summNumber = numberOne + numberTwo;

  summNumber > 20 ? more() : less();
}

function showMoreMessage() {
  console.log("Більше за 20");
}
function showLessMessage() {
  console.log("Менше за 20");
}

calcSummMode(18, 1, showMoreMessage, showLessMessage);

// console.log(calcSummMode()); помилка, оскільки ми не передали аргументів, які очікує функція

//! 10. Фунції, які повертають значення
function cashBack(price, discount = 0.2) {
  //   let result = price - price * discount;
  //   return result;
  return price - price * discount;
}

console.log(cashBack(500));
document.write(
  "<h4 style='color: cyan; margin: 2px;'> price with discount - " +
    cashBack(500) +
    "</h4>"
);

//! 11. Присвоєння значення змінної за результатми функції (return)
let priceWithDiscount = cashBack(500);
console.log(priceWithDiscount, "variables priceWithDiscount");
// якщо функція не повертає значення ми отримаємо undefined
let showLess = showLessMessage();
console.log(showLess);

//! 12. return - зупиняє виконання функції, код після return виконаний не буде.
function cashBackMode(price, discount = 0.2) {
  return;
  let result = price - price * discount;
  return result;
}
document.write(
  "<h4 style='color: cyan; margin: 2px;'> price with discount - " +
    cashBackMode(500, 0.02) +
    "</h4>"
);

let a = 1;
console.log(`Це змінна а, яка = 1 ${a}`);

// function(width, heigth=width)
