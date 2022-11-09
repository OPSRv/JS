// Властивості та методи Math

//? повертає число 3.14
console.log(Math.PI);

//? округлення параметра вгору до найближчого цілого
console.log(Math.ceil(1.2)); //2

//? округлення параметра вниз до найближчого цілого
console.log(Math.floor(1.2)); //1

//? повертає округлене значення (звичайне математичне округлення)
console.log(Math.round(1.2)); //1
console.log(Math.round(1.6)); //2

//? Math.pow(x, y) - зведення X в степінь Y
console.log(Math.pow(4, 2));

//? Math.sqrt(x) - Квадратний корінь з X
console.log(Math.sqrt(16));

//? Отримуємо мінімальне та максимальне значення
let x = 10;
let y = 22;
console.log(Math.min(x, y));
console.log(Math.max(x, y));
let array = [23, 43, 67, 199, 23, 43, 65, 34, 76];

console.log(...array);
console.log(Math.min(...array), "arr - min");
console.log(Math.max(...array), "arr - max");

//? Отримуємо модуль числа
console.log(Math.abs(x - y));

//? Отримуємо *випадкові числа від 0 до 1
console.log(Math.random());

//? Випадкові значення від 0 до 9
console.log(Math.floor(Math.random() * 10));

//? Випадкові значення від 1 до 10
console.log(Math.floor(Math.random() * 10) + 1);
