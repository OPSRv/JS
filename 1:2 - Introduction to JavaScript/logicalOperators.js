// !Оператори
"use strict";

let xNumber = 100;
let yNumber = 200;

let xString = "100";
let yString = "200";

//! Більше
console.log(xNumber > yNumber, "Більше - xNumber > yNumber");

//! Менше
console.log(xNumber < yNumber, "Менше - xNumber < yNumber");

//!Більше рівне
console.log(xNumber >= yNumber, "Більше рівне - xNumber >= yNumber");

//!Менше рівне
console.log(xNumber <= yNumber, "Менше рівне - xNumber >= yNumber");

//! = Присвоєння
// console.log((xNumber = yNumber));

//! Дорівнює
console.log(xNumber == yNumber, "Дорівнює - xNumber == yNumber");

//! Не дорівнює
console.log(xNumber != yNumber, "Не дорівнює - xNumber == yNumber");

//! Не строге порівняння, без приведення типів
console.log(xNumber == xString, "Не строге порівняння, без приведення типів");

//true
//! Строге дорівнює з приведенням типів
console.log(xNumber === xString, "Строге дорівнює з приведенням типів");

//false
//!Не рівно
console.log(xNumber != xString, "не рівно");

//!Строга нерівність з приведенням типів
console.log(xNumber !== xString, "не рівно");

//!Логічне ні
console.log(!(xNumber == xString));

let booleanExample = true;
console.log(!booleanExample, "booleanExample - false");

//!Логічне або ( or )
console.log(xNumber + yNumber == 0 || xNumber + yNumber >= 300);

//! Логічне і (and)
console.log(xNumber + yNumber == 0 && xNumber + yNumber >= 300);
