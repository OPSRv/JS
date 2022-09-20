"use strict";

// !Фундаментальні типи даних

//? 1. Undefined
//? Такий тип даних має змінна, якій ще не було присвоєно значення
let typeUndefined;
console.log(typeUndefined);

//? 2. Null
let header = document.querySelector(".header");
console.log(header);
console.log(typeof null, "- тип даних в null");
// вивід в консоль: оbject
//*Зверніть увагу, що typeof повернуто "object" для nullтипу. Це відома проблема в JavaScript з моменту його першого випуску.

//? 3. Boolean
//? Має два значення - true or false
let numberOne = 3;
let numberTwo = 4;
console.log(numberOne == numberTwo);
console.log(numberOne !== numberTwo);

//? 4. String
//? тип даних, який представляє рядки
let stringTypes = "Привіт! Це рядок";
let stringTypes2 = 45;
console.log(typeof stringTypes2, " - тип даних stringTypes2");

let typesVar = typeof (stringTypes2 + 2);
console.log(typesVar);
console.log(typeof typesVar);
// output typeof - string

//? 5. Number
let numberExample = 45;
console.log(typeof numberExample);
let numberError = "Рядок, який ми хочемо зробити числом";

console.log(
  +numberError,
  "отримаємо NaN, оскільки ми не можемо перетрорити цей рядок в число"
);

//? 6. Object - набір, колекція, що може поєднувати змінні з різними типами даних.
let objectCar = {
  name: "Audi",
  price: 34000,
  sale: true,
};
let arrayTypes = [12, 23, 34, 45];
console.log(typeof objectCar, "objectCar");
console.log(typeof arrayTypes, "arrayTypes");
console.log(objectCar);

//? 7. Symbol - тип даних, який може використовуватись, як ключ у типі Object

//? 8. BigInt
let value1 = 900719925124740998n;
console.log(typeof 900719925124740998n);
//* вивід в консоль: bigInt
// числа  більші за 2 в 53 степені мінус 1
// не співставляється з іншими типами даних
// BigInt було представлено в новій версії JavaScript і тип не підтримувався багатьма браузерами, на даний час підтримується основними.

//* /************************Примітка***********************/
//? Тут усі типи даних, крім Object - примітивні, тоді як Object не є примітивним, оскільки може зберегіати різні типи даних, відповідно примітивний тип даних може зберігати лише один тип.

//? typeof - оператор, який слугує для визначення типу даних. Значення, яке повертає typeof має тип даних string.
//? (typeof value), (typeof true), (typeof (value + value2))
