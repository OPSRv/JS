// "use strict";

//!Приклад об"єкта
// let windowExample = {
//   a: "index.html",
//   b: "javascript.png",
//   c: "script.js",
// };
// console.log(windowExample.b); // => "javascript.png"

// let a = 5;
// console.log(a);

//!Змінна в глобальній області видимості у режимі "use strict" видасть помилку
// b = 100;
/*
window.b
100
*/

//!Змінна оголошена за допомогою var - глобальна область видимості
// var c = "123px";
// console.log(c);
/*
window.c
'123px'
*/
