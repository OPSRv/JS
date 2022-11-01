"use strict";
import { showMessage as showConsole } from "./showMessage.js";
showConsole("HELLO");

let text = document.getElementById("text");

//? використовуємо одинарні та подвійні лапки і косі
let str = "Hello World";
let str_1 = `
Шановні гості:
* Андрій
* Аркадій
* Кирило
* Сергій
`;
showConsole(str_1);

//? Табуляція(\')
let autoList = "Auto:\n \t*BMW\n \t*Audi\n \t*Peugeot\n";
showConsole(autoList);

//? Довжина рядка
let str_2 = "JavaScript";
showConsole(str_2);
showConsole(str_2.length);

//? Доступ до конкретного елементу рядка
showConsole(str_2[0]);
showConsole(str_2[str_2.length - 1]); //? отримуємо останній рядок

//?  Доступ до конкретного елементу рядка метод charAt
showConsole(
  str_2.charAt(10),
  "charAt - повертає порожній рядок, якщо відсутній символ"
);
showConsole(str_2[10], "[] - повертають undefined");

//? Рядки -  незмінний тип даних
//? при "use strict" буде помилка
//? у звичайному режимі елемент рядка не зміниться
let str_3 = "Array";
showConsole(str_3);
//str_3[0] = "O";
//showConsole(str_3);
str_3 = "Arrow";
showConsole(str_3);

//? Конкатенація рядків
let str_4 = "div";
let str_5 = "element";
showConsole(str_4 + "-" + str_5);

//? Методи toUpperCase & toLowerCase

let str_6 = "javascript";
showConsole(str_6.toUpperCase());

let str_7 = "JAVASCRIPT";
showConsole(str_7.toLowerCase());

//? Методи indexOf & lastIndexOf
let str_8 = "Hello World";
let index = str_8.indexOf("World");
showConsole(index, str_8[6]); //? повертає індекс символа з якого починається "слово"
let index_2 = str_8.indexOf("Moon"); //? поверне -1, якщо "слово" не знайдено
showConsole(index_2);

let str_9 = "Hello World";
let lastIndex = str_9.lastIndexOf("World");
showConsole(lastIndex); //? пошук з кінца рядка

//? Рахуємо скільки разів зустрічаєтсья певне слово
let str_10 =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptate dignissimos aspernatur placeat possimus labore voluptas ipsum ! Voluptas ipsum tempore, odit placeat dicta amet tenetur neque ipsum modi consequuntur. Doloremque tenetur ipsum minima minus ipsum quisquam. Ipsum";

//? indexOf("Слово, яке ми шукаємо", "індекс з якого розпочинаємо пошук")
//? індекс з якого розпочинаємо пошук - вказувати необовязково

showConsole(str_10.indexOf("ipsum", 8));

let counter = 0;
let wordToFind = "ipsum";
let index_3 = str_10.indexOf(wordToFind);

while (index_3 != -1) {
  counter++;
  index_3 = str_10.indexOf(wordToFind, index_3 + 1);
}
showConsole(`${wordToFind} - зустрічається ${counter} разів`);

//? Метод includes - використовується, якщо потрібно перевірити чи є збіг, але не потрібна пизиція(true & falce)
let str_11 = "Дуже крутий web-додаток";
showConsole(str_11.includes("крутий")); //? true
showConsole(str_11.includes("Крутий")); //? false

//? Методи startsWith & endsWith - перевіряють чи починаєтсья і закінчуєтсья рядок певним підрядком
showConsole("Телефон".startsWith("Тел"));
showConsole("Телефон".endsWith("фон"));

//? slice - отримання підрядка
let str_12 = "Doloremque tenetur ipsum";
showConsole(str_12.slice());
showConsole(str_12.slice(11)); //? slice виведе рядок з вказаної позиції
showConsole(str_12.slice(11, 18)); //? slice виведе рядок з початкового до кінцевого значення
showConsole(str_12.slice(-5));

//? substring - отримання підрядка
let str_13 = "Hello World";
showConsole(str_13.substring());
showConsole(str_13.substring(0, 5));
showConsole(str_13.substring(-5)); //? substring не працює з відємними значеннями

//? split - розділяє рядок відповідно до заданих параметрів
let str_14 =
  "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.";

showConsole(str_14.split());
showConsole(str_14.split(" "));
showConsole(str_14.split("")[0]);

//? trim & trimStart & trimEnd

let str_15 = "       Hello World        ";
showConsole(str_15.trimStart()); //? видаляємо пробіл на початку
showConsole(str_15.trimEnd()); //? видаляємо пробіл з кінця
showConsole(str_15.trim()); //? видаляємо пробіли

//? concat - метод для конкатенації рядків
//? concat - повертає новий рядок

const str_16 = "Java";
const str_17 = "Script";

showConsole(str_16.concat("", str_17));
showConsole(str_17.concat("-", str_16));

//? Виводимо текст по літері
let someText =
  "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web. JavaScript is easy to learn.";

let i = -1;

let showText = setInterval(() => {
  if (i >= someText.length - 1) {
    clearInterval(showText);
  } else {
    i++;
    text.innerHTML += someText[i];
  }
}, 10);
