"use strict";

let wrapper = document.getElementById("wrapper");
let time = wrapper.querySelector("#time");

const setBackground = (red, green, blue) => {
  //   console.log(red, green, blue, "red, green, blue");
  wrapper.style.background = `#${red}${green}${blue}`;
};

const getTime = () => {
  let date = new Date();
  let hours = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let seconds = date.getSeconds().toString().padStart(2, "0");
  time.innerHTML = `${hours} : ${minutes} : ${seconds}`;

  let red = setColor(seconds) * 10;
  let green = setColor(seconds) / 5;
  let blue = setColor(seconds);

  setBackground(red, green, blue);
};
getTime();

setInterval(getTime, 1000);

function setColor(time) {
  let rgb = 256;
  return Math.round(time ? rgb / time : rgb / (time + 1));
}
