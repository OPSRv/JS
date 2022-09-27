//1. Пряме порівняння
let isVisible;
console.log(typeof isVisible);
isVisible = true;
console.log(typeof isVisible);

if (isVisible === true) {
  console.log("Visible");
} else {
  console.log("NO visible");
}

if (isVisible) {
  console.log("Visible");
} else {
  console.log("NO visible");
}

//2.
let age = 18;
//let accessAllowed = age >= 18 ? true : false;

let accessAllowed = age >= 18;
console.log(accessAllowed);

//3. Присвоєння значення замість порівняння = / == ===
let a;
if ((a = 10)) {
  console.log("Записуємо значення в змінну а");
}
console.log(a);

//4. Скорочення, які можуть у подаьшому викликати помилки
if (isVisible === true) console.log(isVisible);

//5. Перевірка змінної на пустий тип
let variable;

if (variable !== null && variable !== undefined && variable !== "") {
  console.log("variable - isValid");
}

if (variable) {
  console.log("variable - isValid");
}
