"use strict";

//створюємо порожній масив
let array = new Array();

//створюємо порожній масив
let array1 = [];
console.log(array1);

//створюємо масив із значеннями
let array2 = new Array(1, 23, true, { name: "Yana" }, "23", [1, 2, 3, 4, 5]);
console.log(array2);

//створюємо масив із значеннями
let array3 = [1, 34, 54, 65, 78];
console.log(array3);

let itemList = document.querySelectorAll(".list_item");
console.log(itemList);
//кількість елементів в масиві
console.log(itemList.length);

//? виводимо перший елемент масиву з індексом 0
console.log(itemList[0]);

//? створюємо масив з 5ма елементами
let arrayFiveElement = new Array(5);
console.log(arrayFiveElement.length);

arrayFiveElement[0] = "index - 0";
arrayFiveElement[1] = "index - 1";
arrayFiveElement[2] = "index - 2";
arrayFiveElement[3] = "index - 3";
console.log(arrayFiveElement);

arrayFiveElement[4] = "index - 4";
arrayFiveElement[5] = "index - 5";
arrayFiveElement[6] = "index - 6";
arrayFiveElement[7] = "index - 7";
arrayFiveElement[8] = "index - 8";

console.log(arrayFiveElement);
