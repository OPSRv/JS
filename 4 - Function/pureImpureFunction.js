//!pureImpureFunction

//! Чисті функції - це будь-які функції, вихідні дані яких отримані виключно з вхідних даних і не викликають ніяких побічних ефектів у додатку.

//! 1 PureFunction
/*
function multiplication(n) {
  return n ** 2;
}
console.log(multiplication(4));
console.log(multiplication(4));
console.log(multiplication(-4));
*/

//! 2 - Impure
/*
let count = 0;
function myCount() {
  return count++;
}
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount());
console.log(myCount());
*/

//! 3 - Impure
function showAlert() {
  alert("Hello");
}
// showAlert();  функція викликає side-ефект - вивід повідомлення на сторінку

//! 4 - Impure
function random(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
let i = 20;
while (i) {
  console.log(random(10, 20));
  i--;
}

// - побічних ефектів немає
// - приймає аргументи
// - виводить один і той же результат
