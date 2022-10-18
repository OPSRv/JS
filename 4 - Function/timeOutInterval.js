//? Планування setTimeout SetInterval
//? setTimeout - викликає функцію одтин раз через певний проміжок часу
//? SetInterval - дозволяє викликати функцію регулярно, повторючи виклик через певний проміжок часу

//? 1

let i = 1;
let j = 1;
//console.log(i++, ++j);
//console.log(i, j);
// i++ - обчислює, а потім збільшує
// ++i збільшує, а потім обчислює

const showDate = (day, month, year) => {
  if (day && month && year) {
    console.log(`Введена дата ${day}.${month}.${year}`);
  }
};
//setTimeout(showDate, 5000, "06", "10", "2022");
//setInterval(showDate, 3000, "06", "10", "2022");

//? 2
let text = document.querySelector("#log");
// console.log(text);
// console.log(typeof text);

function countNumber(number) {
  //   console.log(number);
  text.innerHTML = number;
  setTimeout(countNumber, 1000, ++number);
}
//setTimeout(countNumber, 1000, 1);

//? 3 clearTimeout
function countNumberClear(number) {
  text.innerHTML = number;
  let id = setTimeout(countNumberClear, 10, ++number);
  //   console.log(id, " - setTimeout id");
  if (number === 101) {
    clearTimeout(id);
  }
}
//setTimeout(countNumberClear, 10, 1);

//?4

let result = 0;
const showNumber = (num) => {
  result += num;
  //   result = result + num;
  console.log(result);
  if (result === 10) {
    clearInterval(timeId);
  }
};
let timeId = setInterval(showNumber, 1000, 1);
