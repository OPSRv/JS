"use strict";

//! Function Expression

//! 1. Синтаксис
functionDeclaration();
function functionDeclaration() {
  console.log("functionDeclaration");
}

//! functionExpression(); //functionExpression.js:11 Uncaught ReferenceError: Cannot access 'functionExpression' before initialization

const functionExpression = function () {
  console.log("functionExpression");
};

//! 2. Оголосимо функцію з назвою
const showName = function showMessage() {
  console.log("function showMessage()");
  console.log(showName.name, " - function name");
  console.log(showMessage.name, " - function name");
};
showName();
//? showMessage(); //Uncaught ReferenceError: showMessage is not defined at

//! 3. Присвоєння функції іншій змінній
const f3 = showName;
f3();
console.log(f3 === showName);

//! 4. this - ключове слово, що використовується в JS та залежить від контексту в якому воно застосовується
console.log(this);
const f4 = function () {
  console.log(this);
};
f4();
//this - use strict - undefined;
// without use strict - посилається на глобальний об"єкт window

//! 5. Функція, яка повертає значення
let f5 = function () {
  return "Функція, яка повертає значення";
};
let result = f5;
console.log(result());
