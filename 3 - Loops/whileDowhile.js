"use strict";

console.log("%c--- WHILE ---", themeStyle);

//? while - цикл який виконується доки умова дорівнює true.
//? while (умова) код;

/*
Щоб цикл мав закінчення, в тілі циклу мають передбачатися 
інструкції, що надають деякий вплив на умову
повторення циклу. В іншому випадку, цикл або 
не виконається жодного разу (за хибної умови), 
або повторюватиметься нескінченно (за істинної умови).
*/

console.log("%cexample - 1", exampleStyle);
let i = 1;
while (i <= 4) {
  console.log(i, " - i ");
  document.write(i, " - i ");
  i++;
}

//? безкінечний цикл
// let j = 1;
// while (j < 10) {
//   console.log(j);
// }

console.log("%cexample - 2", exampleStyle);
let number = 5;
while (number) console.log(number--, "- number");

console.log("%cexample - 3", exampleStyle);

/*
Цикл «while» зручно застосовувати у випадках, коли:
    ■ кількість повторів тіла циклу заздалегідь невідома;
    ■ умова закінчення циклу не залежить напряму від
змінної циклу;
    ■ цикл залежить від вхідних даних, наприклад, від дії
користувача.
*/

let a = 1_000_000;
let b = 1e6;
let c = 1_000000;
console.log(a === b && b === c);

/*
Number(value) для явного перетворення value на число
String(value) для явного перетворення value на рядок
Boolean(value) для явного перетворення value на булеве значення
console.log(Number(years), String(years), Boolean(years));
*/

//Порахувати за скільки часу ви станете мільйонером
/*
let depositAmount = +prompt("Введіть початкову суму депозиту:");
console.log(typeof depositAmount, depositAmount); // якщо ввести рядок
let years = 0;

if (depositAmount && depositAmount <= 1e6) {
  while (depositAmount < 1e6) {
    years++;
    console.log(years);
    depositAmount += depositAmount * 0.1; // 0.1 = 10%
  }
  alert("Ви станете мільйонером через " + years + " років");
} else if (depositAmount >= 1e6) {
  alert("Ви вже мільйонер");
} else {
  alert("Початкова сума депозиту повинна бути числом");
}
*/

//Другий різновид умовних циклів — цикл з постумовою
console.log("%c--- DO WHILE ---", themeStyle);
let count = 0;
do {
  console.log(count);
  count++;
} while (count < 0);

/*
Інший приклад: у користувача потрібно отримати
підтвердження певної дії. Ми не хочемо використовувати
діалог «confirm», тому що у ньому можна випадково натиснути пробіл, «Enter» або «Esc». Нам потрібне впевнене
підтвердження, тобто користувач має ввести або «yes»,
або «no». В іншому випадку ми будемо виводити запит
повторно, чекаючи однієї з двох відповідей. Оскільки
запит потрібно виводити щонайменше один раз, цикл з
постумовою буде краще виглядати так:
*/

let txt;
do {
  txt = prompt("Confirm: yes or no", "yes");
} while (txt != "yes" && txt != "no");
