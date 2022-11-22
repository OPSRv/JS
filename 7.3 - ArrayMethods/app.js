"use strict";
import { fakeUser as consumers } from "./fakeUser.js";

const themeStyle =
  "color: yellow; background: green; padding: 2px; font-weight: bold; font-size: 10px;";

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5];

console.log("%cpush", themeStyle);
//* ----------------- push
//* ------------------------------------------
//* додає елемент*и в кінець масиву
let arr_1 = [1, 2, 3];
arr_1.push(4);
console.log("arr_1: ", arr_1); // [1, 2, 3, 4]

arr_1.push(34, 45, 56, 67);
console.log("arr_1: ", arr_1); //[1, 2, 3, 4, 34, 45, 56, 67]

console.log("%cunshift", themeStyle);
//* ----------------- unshift
//* ------------------------------------------
//* додає елемент*и на початок масиву
let arr_2 = [1, 2, 3];
arr_2.unshift(0, 2, 3);
console.log("arr_2: ", arr_2); //[0, 2, 3, 1, 2, 3]

console.log("%cshift", themeStyle);
//* ----------------- shift
//* ------------------------------------------
//* видаляє елемент з початку масиву
let arr_3 = [1, 2, 3];
arr_3.shift();
console.log("arr_3: ", arr_3); // [2, 3]

console.log("%cpop", themeStyle);
//* ----------------- pop
//* ------------------------------------------
let arr_4 = [1, 2, 3];
arr_4.pop();
console.log("arr_4: ", arr_4); //[1, 2]

console.log("%creverse", themeStyle);
//* ----------------- reverse
//* ------------------------------------------
//* змінює порядок елементів на зворотній
let arr_5 = [1, 2, 3, 4, 5, 6, 7, 8];
arr_5.reverse();
console.log("arr_5: ", arr_5);

console.log("%cjoin", themeStyle);
//* ----------------- join
//* ------------------------------------------
//* створює рядок з елементів масиву
let arr_6 = ["i", "love", "JS"];
let a = arr_6.join(" -*- ");
console.log(a);

console.log("%cslice", themeStyle);
//* ----------------- slice
//* ------------------------------------------
//* slice(start, end) - повертає новий масив із заданих start, end
let arr_7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5];
console.log(arr_7.slice(0, 3)); //[1, 2, 3]
console.log(arr_7.slice(3, 7)); //[4, 5, 6, 7]
console.log(arr_7.slice(3, 99)); //[4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5];
console.log(arr_7.slice(3)); //[4, 5, 6, 7, 8, 9, 10, -1, -2, -3, -4, -5]
console.log(arr_7.slice(-3)); //[-3, -4, -5]

console.log("%cincludes", themeStyle);
//* ----------------- includes
//* ------------------------------------------
//* перевіряє наявність елемента в масиві
let arr_8 = ["a", "b", "c"];
console.log(arr_8.includes("c")); //true

console.log("%cat", themeStyle);
//* ----------------- at
//* ------------------------------------------
//* повертає елемент масиву за його індексом
let arr_9 = ["a", "b", "c"];
console.log(arr_9.at(-2)); //b
console.log(arr_9.at(1)); //b

console.log("%csplice", themeStyle);
//* ----------------- splice
//* ------------------------------------------
//* splice - дозволяє додавати, видаляти та занівати елементи
//TODO syntax - array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
let arr_10 = [1, 2, 3];

arr_10.splice(0, 2);
console.log("arr_10: ", arr_10); //[3]

arr_10.splice(2, 0, "4", "5");
console.log("arr_10: ", arr_10); //[1, 2, '4', '5', 3]

let arr_11 = [1, 2, 3, 4, 5];
arr_11.splice(-2, 0, 999, 1000);
console.log(arr_11); //[1, 2, 3, 999, 1000, 4, 5]

console.log("%cconcat", themeStyle);
//* ----------------- concat
//* ------------------------------------------
//* створює новий масив, в який копіює інші масиви

//for ES5
let arr_12 = ["Jane", "Lori", "Ann"];
let arr_13 = ["Dolores", "Hylia", "Casablanca"];

let output = arr_12.concat(arr_13);
console.log("output: ", output);

//for ES6
//! краще використовувати ...spread operatoes
let output_2 = [...arr_12, ...arr_13];
console.log("output_2: ", output_2);

console.log("%csort", themeStyle);
//* ----------------- sort
//* ------------------------------------------
//chicken - U+1F414
//egg (U+1F95A_
const array_1 = ["🥚", "🐔"];
console.log(array_1.sort());
//* ------------------------------------------
let arr_14 = [66, 44, 12, 123, 654, 567, 123, 2, 3, 4, 5];

let sortArr_14 = arr_14.sort((a, b) => {
  //   console.log(a, "-", b);
  return a - b;
});
console.log("sortArr_14: ", sortArr_14); // [2, 3, 4, 5, 12, ..];
//* ------------------------------------------
const users = [
  { name: "Antony", age: "23" },
  { name: "Greg", age: "30" },
  { name: "Tommy", age: "18" },
  { name: "Ozzy", age: "67" },
  { name: "Axel", age: "32" },
  { name: "Lion", age: "56" },
];
users.sort((a, b) => a.age - b.age);
console.log(users);

//* ------------------------------------------
let arr_15 = ["a", "C", "d", "e", "E"];
arr_15.sort();
console.log(arr_15); //['C', 'E', 'a', 'd', 'e']

//? МЕТОДИ ПЕРЕБОРУ МАСИВІВ
//* всі подальші методи приймають callback функцію
// /*  і повертають новий масив*/

console.log("%cForEach", themeStyle);
//* ----------------- ForEach
//* ------------------------------------------
//* ForEach запускає функцію для кожного елеменуту масиву

let newArr_1 = [];
array.forEach((elem) => {
  newArr_1.push((elem *= elem));
});
console.log(newArr_1);

//* ------------------------------------------

let manufacture = ["Tesla", "BMW", "Apple", "Google", "Microsoft"];

manufacture.forEach((element, index, array) => {
  //console.log(`${element} - має позицію, ${index}, - в масиві ${array}`);
});

manufacture.forEach(function (element, index, array) {
  //console.log(`${element} - має позицію, ${index}, - в масиві ${array}`);
});

//* ------------------------------------------
// console.log(consumers);

let newUsersName = [];

const getUsersName = (elem) => {
  newUsersName.push(elem.name);
};
consumers.forEach(getUsersName);
console.log(newUsersName);

console.log("%cmap", themeStyle);
//* ----------------- map
//* ------------------------------------------
//* найбільш використовуваний метод
//* map - викликає функцію для кожного елемента масиву і повертає масив результатів виконання функції
//! return new array

let arr_16 = [1, 2, 3, 4, 5];
let newArr_16 = [];

newArr_16 = arr_16.map((elem) => {
  return (elem *= elem);
});
console.log(newArr_16);
console.log(typeof newArr_16);

//* ------------------------------------------

let arr_17 = ["foo", "bar", "foobarbaz"].map((item) => item.length);
console.log("arr_17: ", arr_17); //[3, 3, 9]

//* ------------------------------------------
let userContactInfo = consumers.map((elem) => {
  return {
    name: elem.name,
    email: elem.email,
    username: elem.username,
  };
});
console.log("userContactInfo: ", userContactInfo);

const $block = document.getElementById("block");

$block.innerHTML =
  "<ul>" +
  consumers
    .map((user) => {
      return "<li>" + user.name + "</li>";
    })
    .join("") +
  "</ul>";

document.getElementById("blockEmail").innerHTML = consumers
  .map(
    (user) =>
      `<ul>
             <li> ${user.name} - ${user.email}</li>
        </ul>
    `
  )
  .join("");
