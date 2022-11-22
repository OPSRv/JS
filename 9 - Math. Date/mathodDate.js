"use strict";
//method
// let d = new Date("February 2, 2021 01:22:00");
let d = new Date();
// console.log(d.getFullYear(), "Рік");
// console.log(d.getMonth(), "Місяць від 0 до 11");
// console.log(d.getDate(), "Отримаємо день в місяці");
// console.log(d.getDay(), "день в тижні");
// console.log(d.getHours(), "години");
// console.log(d.getMinutes(), "Хвилини");
// console.log(d.getSeconds(), "секунди");
// console.log(d.getMilliseconds(), "мілісекунди");

//! Метод padString - для рядків str
// console.log("Hello".padStart(12));
// console.log("Hello".padStart(12).length);
// console.log("Hello".padStart(15, "123"));

//! Форматуємо дату
function formatDate(d) {
  const date = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  setInterval(formatDate, 1000);
  return `${date}.${month}.${year}, ${hours}:${minutes}`;
}

//! Форматуємо дату - Чт, 10 листопада 2022 року, 18:52
function formatUaDate(d) {
  const date = d.getDate().toString().padStart(2, "0");
  const day = d.getDay();
  const dayTitle = ["Нд", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const month = d.getMonth().toString().padStart(2, "0");
  const monthTitle = [
    "січеня",
    "лютого",
    "березня",
    "квітня",
    "травня",
    "червня",
    "липня",
    "серпня",
    "вересня",
    "жовтня",
    "листопада",
    "грудня",
  ];

  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, "0");
  const minutes = d.getMinutes().toString().padStart(2, "0");
  return `${dayTitle[day]}, ${date}  ${monthTitle[month]} ${year} року, ${hours}:${minutes}`;
}
// console.log("formatUaDate: ", formatUaDate(d));

//! Методи для встановлення дати
// d.setFullYear(2025);
// console.log(d);
// d.setMonth(0);
// console.log(d);
// d.setDate(1);
// console.log(d);
// d.setHours(12);
// console.log(d);

//! Автовиправлення дати
// console.log(d);
d.setMonth(44);
// console.log(d);

//!
let presentDate = new Date();
//! toDateString - отримаємо дату англійською мовою
console.log("toDateString:\n\n", presentDate.toDateString());
console.log("toLocaleDateString:\n\n", presentDate.toLocaleDateString());
console.log("toLocaleDateString:\n\n", presentDate.toLocaleDateString("en-US"));
console.log("toLocaleDateString:\n\n", presentDate.toLocaleDateString("uk-UA"));

let options = {
  weekday: "long",
  era: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZoneName: "short",
  hour12: true,
};

console.log(
  "toLocaleDateString:\n\n",
  presentDate.toLocaleDateString("en-US", options)
);

//! toLocaleTimeString - рядок з регіонозалежним виведенням дати
console.log(presentDate.toLocaleTimeString("en-US", options));
console.log(presentDate.toLocaleTimeString("uk-UA", options));

let today = new Date();
console.log("toISOString: ", today.toISOString());

//!
let dateFirstDayOfYears = new Date("01 January 1970");
console.log("dateFirstDayOfYears: ", dateFirstDayOfYears);
console.log(dateFirstDayOfYears.toISOString());
let a = dateFirstDayOfYears.toISOString();
