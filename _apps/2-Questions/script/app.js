"use strict";
import { questions } from "./questions.js";

//TODO element
const wrapper = document.querySelector(".wrapper");
const spiner = document.querySelector(".spiner");
const btnStart = document.querySelector("#btnStart");

//TODO create element
const table = document.createElement("table");
wrapper.append(table);

function createTableContent() {
  for (let i = 0; i < questions.length; i++) {
    table.innerHTML += `
      <tr>
        <td>${questions[i].question}</td>
        <th>
        <div class="input_wrapper">
          <input type="text" class="input" value="" />
          <button class="btn">OK</button>
        </div>
        </th>
      </tr>
        `;
  }
}

let isLoading = true;
function showSpiner(isLoading) {
  if (isLoading) {
    spiner.style.display = "block";
  } else {
    spiner.style.display = "none";
  }
}

btnStart.addEventListener("click", () => {
  showSpiner(isLoading);
  btnStart.style.display = "none";
  setTimeout(() => {
    showSpiner(!isLoading);
    startGame();
  }, 500);
});

function startGame() {
  createTableContent();
  let tdStyle = document.querySelectorAll("td");
  let thStyle = document.querySelectorAll("th");
  let input = document.querySelectorAll(".input");
  let btn = document.querySelectorAll(".btn");

  for (let i = 0; i < questions.length; i++) {
    btn[i].addEventListener("click", () => {
      if (questions[i].answer.toLowerCase() === input[i].value.toLowerCase()) {
        //joy
        tdStyle[i].style.background = "green";
        tdStyle[i].style.color = "yellow";
        input[i].style.display = "none";
        btn[i].style.display = "none";
        thStyle[i].classList.add("imgJoy");
      } else if (input[i].value == "") {
        alert("Спробуйте ще раз");
      } else {
        //sad
        tdStyle[i].style.background = "red";
        tdStyle[i].style.color = "black";
        input[i].style.display = "none";
        btn[i].style.display = "none";
        thStyle[i].classList.add("imgSad");
      }
    });
  }
}
