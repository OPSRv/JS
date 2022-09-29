// "use strict";

console.log("%c--- FOR ---", themeStyle);

//Цикл-лічильник (або цикл з лічильником) створюється за допомогою оператора «for».

/*
for («initialization»; «condition»; «expression») {
    statement (operator)
}
*/

//? «initialization» використовується для початкової ініціалізації циклової змінної.
//? Цей блок виконується один раз перед початком циклу

//? Другий блок «condition» містить умову, за якої цикл триває.
//? Зазвичай ця умова містить обмеження на циклову змінну.

//? Третій блок «expression» задає вираз зміни циклової змінної(крок циклу)

//! Другий та третій блоки виконуються на кожній ітерації циклу.

console.log("%cexample - 1", exampleStyle);
// for (i = 1; i <= 10; i++) console.log(i);
//console.log(i); // глобальна область видимості, не забуваємо записувати let та/або use strict

console.log("%cexample - 2", exampleStyle);
// for (const i = 1; i <= 10; i++) console.log(i); //Uncaught TypeError: Assignment to constant variable.

console.log("%cexample - 3", exampleStyle);
// for (let i = 0; i < 5; i++) console.log(i); // хибна умова, цикл не виконується

console.log("%cexample - 4", exampleStyle);
//console.log(i); //спробуємо вивести змінну і

console.log("%cexample - 5", exampleStyle);
//? перший блок можна не вказувати
// let i = 0;
// for (; i < 5; i++) console.log(i);

console.log("%cexample - 6", exampleStyle);
//? Аналогічно, якщо циклова змінна змінює значення в тілі циклу, то останній блок також можна не вказувати:
// let i = 0;
// for (; i < 5; ) {
//   console.log(i);
//   i++;
// }

console.log("%cexample - 7", exampleStyle);
//? Якщо в тілі циклу містяться механізми власної зупинки,
//? то і другий блок, який відповідає за циклову умову,
//? стає непотрібним
let j = 0;
for (;;) {
  console.log(j);
  j++;
  if (j > 4) break;
}

console.log("%cexample - 8", exampleStyle);
//? Усі блоки оператора «for» можуть містити кілька операцій, розділених комою.
//? Наприклад, наступний цикл містить дві змінні «i» та «j», одна збільшується, починаючи з 0;
//? інша зменшується, починаючи з 10. Цикл продовжується, доки змінні не рівні між собою (i!=j). Інакше кажучи, цикл припиняється, коли значення змінних виявляються рівними один одному:

for (i = 0, j = 10; i != j; i++, j--) console.log(i, "!=", j);

console.log("%cexample - 9", exampleStyle);
//? потрібно згенерувати не більше десяти випадкових чисел діапазону 1-7.
//? Якщо випаде четвірка, генерація припиниться.

for (i = 0; i < 10; i++) {
  let random = Math.round(Math.random() * 6) + 1;
  if (random == 4) break;
  console.log(random);
}
//! break - цикл припиняє роботу, виконується код після циклу

console.log("%cexample - 10", exampleStyle);
//? треба згенерувати рівно 10 випадкових чисел, але без четвірок, у такому випадку краще використати цикл while, оскільки нам не відомо, скільки буде ітерацій циклу, щоб випало 10 чисел без 4-ки.

let n = 0;
let p = 0;
while (n < 10) {
  rnd = Math.round(Math.random() * 10);
  if (rnd == 4) continue;
  console.log(rnd);

  n++;
}
//! continue - пропускаємо частину тіла циклу і перескакуємо на наступний круг його виконання, цикл продовжує виконуватись
// console.log(n, "n");

console.log("%cexample - 11", exampleStyle);
//continue & break - не використовуються у тернарному операторі, буде помилка
let numberEx = 0;
for (let y = 0; y < 10; y++) {
  // y != 2 ? console.log("y != 2") : continue
}

//дуже старий скрипт, він працює надзвичайно швидко, адже не відбувається жодних DOM-модифікацій. Він записує беспосередньо в текст сторінки, поки DOM ще не сформований.

console.log("%cexample - 12", exampleStyle);
loopI: for (i = 0; i < 5; i++)
  loopJ: for (j = 0; j < 5; j++) {
    console.log(i, j);
    if (j == 3) break loopI;
  }
