"use strict";

const set = new Set([34, 45, 34, 1, 2, 3, true, true, { name: "John" }]);
console.log("🚀 ~ file: set.js:4 ~ set", set);

console.log("------Methods");
console.log("------add--------");
set.add(30).add(30).add(301);
console.log("🚀 ~ file: set.js:9 ~ set", set);

console.log("----has()----");
console.log(set.has(30));

console.log("----size----");
console.log(set.size);

console.log("---delete()------");
set.delete(34);
console.log("🚀 ~ file: set.js:19 ~ set", set);

console.log("---clear()----");
// set.clear();
console.log("🚀 ~ file: set.js:23 ~ set", set.size);

console.log("-------------------");
console.log("------values()-------");
console.log(set.values());

console.log("------keys()-------");
console.log(set.keys());

console.log("-----entries----");

console.log(set.entries());
//? Object.entries() - повертає масив пар ключ - значення

console.log("for of");
for (let key of set) {
  console.log(key);
}

console.log("-------practice---------");
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function uniqueValues(arr) {
  //   return [...new Set(arr)];
  return Array.from(new Set(arr));
}
console.log(uniqueValues(values));

[
  banana,
  uince,
  raspberry,
  strawberry,
  blackberry,
  blackcurrant,
  pomegranate,
  quince,
  raspberry,
  blueberry,
  pear,
  pineapple,
  plum,
  pomegranate,
  quince,
  raspberry,
  strawberry,
  watermelon,
];
