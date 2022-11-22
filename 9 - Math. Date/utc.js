//UTC GMT

// let d = new Date(0);
// console.log(d);

//! Задаємо задаємо 0 від моменту відліку UTC+0 or UTC or *GMT+0 *GTM
let dateFirstDayOfYears = new Date("01 January 1970 UTC+0");
console.log(dateFirstDayOfYears.toISOString());
console.log(dateFirstDayOfYears.getTime());

//! Створений час, але він буде із зсіщенням на GMT+3 для Києва у зимовий час, у літній буде зміщений на +2
let dateFirstDayOfYearsWithOutUTC = new Date("01 January 1970");
console.log(dateFirstDayOfYearsWithOutUTC);
console.log(dateFirstDayOfYearsWithOutUTC.getTime());
console.log(10800000 / 3600000);

//!
let today = new Date();
console.log(today.getTimezoneOffset()); //! зсув по UTC в хвилинах
console.log(today.getTimezoneOffset() / 60); //! зсув по UTC в годинах

//!методи UTC
let d = new Date();
console.log(d.getUTCFullYear(), "Рік");
console.log(d.getUTCMonth(), "Місяць від 0 до 11");
console.log(d.getUTCDate(), "Отримаємо день в місяці");
console.log(d.getUTCDay(), "день в тижні");
console.log(d.getUTCHours(), "години");
console.log(d.getUTCMinutes(), "Хвилини");
console.log(d.getUTCSeconds(), "секунди");
console.log(d.getUTCMilliseconds(), "мілісекунди");
