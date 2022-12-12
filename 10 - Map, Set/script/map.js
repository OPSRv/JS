"use strict";

const userProfileObj = {
  name: "Michael",
  age: 55,
  "years-active": "1993-present",
};
console.log("🚀 ~ file: map.js:8 ~ userProfileObj\n", userProfileObj);
console.log("\n");

const userDataArr = [
  ["name", "Michael"],
  ["age", 55],
  ["years-active", "1993-present"],
];
// console.log("🚀 ~ file: map.js:15 ~ userDataArr\n", userDataArr);
// console.log("\n");

// console.log(Object.entries(userProfileObj));
// //? Object.entries - повертає масив пар - ключ, значення
// console.log("\n");

// console.log(Object.fromEntries(userDataArr));
// //? Object.fromEntries - повертає об"єкт з масиву ключ, значення
// console.log("\n");

// console.log(Object.keys(userProfileObj));
// //? Object.keys - повертає масив ключів
// console.log("\n");

// console.log(Object.values(userProfileObj));
// //? Object.values - повертає масив значень
// console.log("\n");

// for (let value of Object.values(userProfileObj)) {
//   console.log(value);
// }

// const map = new Map();
// console.log(map);

const mapUser = [
  ["name", "Michael"],
  ["age", 55],
  ["years-active", "1993-present"],
];

const mapUserData = new Map(mapUser);
console.log("🚀 ~ file: map.js:50 ~ mapUserData", mapUserData);
//? отримуємо колекцію ключ - значення, так як і в Object

console.log("-----Methods-Map-----\n");
console.log("-----get()-----\n");
console.log(mapUserData.get("name"));
//? get - отримуємо значення за ключем
// console.log(mapUserData.get("userProfileObj"));
//? якщо ключа немає отримаємо undefined

console.log("-----set()-----\n");
mapUserData.set("film", "Перевізник");
console.log("🚀 mapUserData", mapUserData);

mapUserData
  .set("job", "actor")
  .set("car", "Lanos")
  .set("home", "flat")
  .set(false, "single")
  .set(undefined, "cash")
  .set(NaN, "2+undefined")
  .set(userProfileObj, "person");

console.log("🚀mapUserData", mapUserData);
console.log(mapUserData.get("userProfileObj"));

console.log("-----delete()-----\n");
//видаляє елемент по ключу
mapUserData.delete(false);
mapUserData.delete(undefined);
mapUserData.delete(NaN);
console.log("🚀 ~ file: map.js:78 ~ mapUserData", mapUserData);

console.log("-----has()-----\n");
//? повертає true якщо key існує, інакше false
console.log(mapUserData.has(userProfileObj));
console.log(mapUserData.has(NaN));

console.log("-----size-----\n");
console.log(mapUserData.size);

console.log("-----🚀 clear()-----\n");
// mapUserData.clear();
//? видаляє всі елементи в колекції

console.log("🚀 ~ file: map.js:92 ~ mapUserData", mapUserData.size);

for (let entries of mapUserData.entries()) {
  console.log(entries);
}

// console.log("----🚀 Деструкторизоване присвоювання----");
// let foo = ["one", "two", "three"];

// let [one, two, three] = foo;

// console.log(one, two, three);

console.log("-----🚀 [key, value] -----");

console.log(mapUserData);
for (let [key, value] of mapUserData) {
  console.log(key, value);
}

console.log("----- 🚀 value -----");
for (let value of mapUserData.values()) {
  console.log(value);
}

console.log("----- 🚀 key -----");
for (let key of mapUserData.keys()) {
  console.log(key);
}

console.log("----- 🚀 Map forEach -----");

mapUserData.forEach((val, key, map) => {
  console.log(key, "-", val);
});

console.log("----- 🚀 Map to Array - spread -----");
console.log("spread");
const arr = [...mapUserData];
console.log("🚀 arr", arr);

console.log("----- 🚀 Map to Array.from -----");
const arr_1 = Array.from(mapUserData);
console.log("🚀 arr_1", arr_1);
console.log("🚀 arr_1", arr_1[7]);

console.log("----- 🚀 Map to Object -----");
const mapObj = Object.fromEntries(mapUserData.entries());
console.log("🚀 mapObj", mapObj);

console.log("----- 🚀 practice -----");

const users = [{ name: "John" }, { name: "Jack" }, { name: "Rosaline" }];

const visits = new Map();
console.log("🚀 ~ file: map.js:149 ~ visits", visits);

visits
  .set(users[0], new Date())
  .set(users[1], new Date(new Date().getTime() + 5000 * 60))
  .set(users[2], new Date(new Date().getTime() + 10000 * 60));

function lastVisit(user) {
  return visits.get(user);
}

console.log(lastVisit(users[0]));
console.log(lastVisit(users[1]));
console.log(lastVisit(users[2]));
