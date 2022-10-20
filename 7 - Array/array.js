"use strict";

//створюємо порожній масив
let array = new Array();

//створюємо порожній масив
let array1 = [];
//console.log(array1);

//створюємо масив із значеннями
let array2 = new Array(1, 23, true, { name: "Yana" }, "23", [1, 2, 3, 4, 5]);
//console.log(array2);

//створюємо масив із значеннями
let array3 = [1, 34, 54, 65, 78];
//console.log(array3);

//let itemList = document.querySelectorAll(".list_item");
//console.log(itemList);
//кількість елементів в масиві
//console.log(itemList.length);

//? виводимо перший елемент масиву з індексом 0
//console.log(itemList[0]);

//? створюємо масив з 5ма елементами
let arrayFiveElement = new Array(5);
console.log(arrayFiveElement);

arrayFiveElement[0] = "index - 0";
arrayFiveElement[1] = "index - 1";
arrayFiveElement[2] = "index - 2";
arrayFiveElement[3] = "index - 3";
//console.log(arrayFiveElement);

arrayFiveElement[4] = "index - 4";
arrayFiveElement[5] = "index - 5";
arrayFiveElement[6] = "index - 6";
arrayFiveElement[7] = "index - 7";
arrayFiveElement[8] = "index - 8";

console.log(arrayFiveElement);

//! ПРОДОВЖЕННЯ
console.log("--------------ПРОДОВЖЕННЯ-------------------");

//? Зменшуємо розмір масиву
arrayFiveElement.length = 3;
//console.log(arrayFiveElement);

//? Підрахунок суми елементів масиву
let arr = [12, 2, 3, 5, 6, 7, 10];
let result = 0;
console.log(arr.length);

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  result += arr[i];
}
console.log(result, "arr sum result");

//? Виводимо масив з різними типами даних
let arr2 = [42, "audi 80", true, undefined, NaN];
//console.log(arr2);
//console.log(arr2[0]);

// for (let i = 0; i < arr2.length; i++) {
//   console.log(arr2[i]);
// }

//? Двовимірні масиви
console.log("----------Двовимірні масиви---------");

let array4 = [
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
];

console.log(array4);
console.log(array4[0][0]);
console.log(array4[1][2]);
//? Виводимо двовимірний масив

for (let i = 0; i < array4.length; i++) {
  // console.log(array4[i]);
  let k = array4[i];
  for (let j = 0; j < k.length; j++) {
    // console.log(k[j]);
  }
}

//? Зміна масиву за допомогою функції
let nameArray = ["Jack", "Bob", "John", "Bill", "Anna"];

function setValueOfArray(arr, index, newValue) {
  arr[index] = newValue;
}
console.log(nameArray);
setValueOfArray(nameArray, 2, "Angelina");
console.log(nameArray);
