"use strict";
let wrapper = document.querySelector(".wrapper");

const RANDOM_USER_URL = "https://randomuser.me/api/portraits/men/";
const USER_INFO = "https://jsonplaceholder.typicode.com/users";

let id = 23;
console.log(RANDOM_USER_URL + `${id}.jpg`);

const getPosts = async () => {
  const objUser = await fetch(USER_INFO);
  const userData = await objUser.json();
  if (objUser.status == 200) {
    createTable(userData);
  }
};

getPosts();

function createTable(data) {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    wrapper.innerHTML += `
  <img src='${RANDOM_USER_URL}${data[i].id}.jpg' alt="" />
  `;
  }
}
