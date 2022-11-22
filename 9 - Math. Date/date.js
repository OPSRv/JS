//? Виводимо сьогоднішню дату
const today = new Date();
console.log(today);

const startDate = new Date(0);
console.log(startDate);
//?
console.log(Date.now()); //? кількість мілісекунд, що пройшли з 1 січня 1970 року

let date1 = new Date("2022-08-11");
console.log(date1);

let date2 = new Date("02/06/2022");
console.log(date2);

let date3 = new Date("November 2, 2021 13:22:00");
console.log(date3);

let date4 = new Date("2017-11-14T02:30:05");
console.log(date4);

let date5 = new Date("02 November 2020 13:22:00");
console.log(date5);

let date6 = new Date(2022, 10, 8, 19, 12, 35, 400);
//? рік, місяць 0-11, день, години, хвилини, секунди, мілісекунди
console.log(date6);

//? Різниця між датами
let dateMin = new Date("2022-11-11");
let dateMax = new Date("2022-11-31");
// отримали різницю між датами в мілісекундах
console.log(dateMax - dateMin);
// отримали різницю між датами в днях
console.log((dateMax - dateMin) / 24 / 60 / 60 / 1000, "день");

//? Порівняння
console.log(dateMin > dateMax);
console.log(dateMin < dateMax);

//? Кількість мілісекунд, що пройшли з 1 січня 1970 року до вказаної дати
console.log(Date.parse("2022-08-11"));
