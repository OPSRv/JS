//Арифметичні оператори
"use strict";

let a = 5;
let b = 10;
console.group("Арифметичні оператори");
//!Додавання
console.log(a + b, "Додавання - a + b");

//!Віднімання
console.log(b - a, "Віднімання - b - a");

//!Множення
console.log(a * b, "Множення a * b");

//!Ділення
console.log(a / b, "Ділення a / b");

//!Залишишок від ділення(остача)
console.log(b % a, "Залишишок від ділення(остача) - b % a");

//!Зведення до степеня
console.log(a ** 2, "Зведення до степеня - a ** 2");

//!Інкремент
console.log(++a, "Інкремент - ++a");

//!Декремент
console.log(--b, "Декремент - --b");

console.groupEnd();

//! Порядок виконання математичних операцій
let result = 2 + 2 * 2;
console.log(result, "Порядок виконання математичних операцій");

//! Групування
let result2 = 2 / 2 - (3 + 4);
console.log(result2, "Групування - 2 / 2 - (3 + 4)");

//! Приведення типу(змінюємо з string на number)
let stringExanple = "45";
let number = +stringExanple;
console.log(number, "Приведення типу(змінюємо з string на number)");
console.log(typeof number);
