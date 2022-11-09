"use strict";
const firstDate = document.querySelector("#firstDate");
const lastDate = document.querySelector("#lastDate");
const result = document.querySelector(".result");
const btn = document.querySelector(".btn");
let first, second;

firstDate.addEventListener("input", () => {
  first = new Date(firstDate.value);
});

lastDate.addEventListener("input", () => {
  second = new Date(lastDate.value);
});

btn.addEventListener("click", () => {
  dateDifference(first, second);
});

function dateDifference(firstDay, lastDay) {
  if (firstDay && lastDay) {
    result.innerHTML = Math.abs((lastDay - firstDay) / 24 / 60 / 60 / 1000);
  } else {
    result.innerHTML = "Виберіть дати";
  }
}
