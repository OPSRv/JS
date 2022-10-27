"use strict";
const number = document.getElementById("number");

let btn_decrement = document.querySelector(".btn_decrement");
let btn_reset = document.querySelector(".btn_reset");
let btn_increment = document.querySelector(".btn_increment");

let counter = 0;

function increment() {
  counter++;
  number.innerHTML = counter;
}

function decrement() {
  if (counter) {
    counter--;
    number.innerHTML = counter;
  }
}

function reset() {
  counter = 0;
  number.innerHTML = counter;
}

function someFunction() {
  console.log("someFunction");
}

btn_increment.addEventListener("click", increment);
btn_decrement.addEventListener("click", decrement);
btn_reset.addEventListener("dblclick", reset);
