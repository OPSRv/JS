"use strict";
//console.log("-------- Method --------- ");

//? Пошук індексу в масиві за значенням (indexOf)
let array = [42, 56, 789, 332, 188, -1];
//console.log(array);

let index = array.indexOf(789);
//console.log(index, "- індекс");

//console.log(array[index]);

let indexUnd = array.indexOf(1408);
//console.log(indexUnd);

//?Пошук індексу в масиві за значенням (lastIndexOf) з
//? права на ліво
let index2 = array.lastIndexOf(332);
//console.log(index2);

//? Пошук значень, що повторюютсья (indexOf)
// let arr = [42, 56, 789, 56, 332, 188, -1, 1, 34, 54, 65, 78, 56];
// let count = 0;
// let index3 = arr.indexOf(56);

// while (index3 != -1) {
//   count++;
//   index3 = arr.indexOf(56, index3 + 1);
// }
// console.log(count);

//? Пошук значень, що повторюютсья (lastIndexOf)
let arr = [
  42, 56, 789, 56, 332, 188, -1, 1, 34, 54, 65, 78, 56, 56, 56, 34, 56, 34, 332,
  188,
];
let count = 0;
let index4 = arr.lastIndexOf(123);

while (index4 != -1) {
  count++;
  //console.log(count, "count");

  if (index4 == 0) break;

  index4 = arr.lastIndexOf(123, index4 - 1);
  console.log(index4, "- index4");
}
console.log(count);
