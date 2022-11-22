"use strict";
const clock = document.getElementById("clock");
const second = clock.querySelector("#second");

let date = new Date();
let hours = date.getHours();
let minutes = date.getMinutes();
let seconds = date.getSeconds();

if (hours >= 12) {
  hours -= 12;
} else {
  hours = hours;
}

console.log(hours, minutes, seconds);

function moveArrow(HTMLElement) {
  HTMLElement.style.transform += "rotate(6deg)";
}

setInterval(() => {
  moveArrow(second);
}, 1000);
