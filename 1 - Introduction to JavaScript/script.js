// !Над оголошенням строгого режиму(use strict) може бути тільки коментар
"use strict";

// !Коментарі
// console.log("first"); //console.log("first");

/*********Коментар***********/

/* 
console.log(first);
console.log(first);
console.log(first);
console.log(first);
*/

//!Регіcтрозалежність
//JS - регіcтрозалежна мова програмування
let CamelCase = "CamelCase";
let camelCase = "camelCase";
console.log(CamelCase, camelCase, " - дві різні змінні");

var variables = "variables";
let lowerCamelCase = "lowerCamelCase";
const constName = "constName";
//? зазвичай використовуємо - lowerCamelCase

// a = 20;
// b = 21;
// console.log(a + b);
//? У строгому режимі буде помилка, оголошуємо змінні за допомогою let, константи за допомогою const
