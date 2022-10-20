"use strict";

let tbody = document.querySelector(".tbody");

const getPosts = async () => {
  const obj = await fetch("https://jsonplaceholder.typicode.com/posts");
  //   console.log(obj);
  const result = await obj.json();
  if (obj.status == 200) {
    createTable(result);
  }
};

getPosts();

function createTable(data) {
  //   console.log(data[0].body);
  //   data.length = 5;

  for (let i = 0; i < data.length; i++) {
    tbody.innerHTML += `
    <tr>
        <td data-label="ID">${data[i].id}</td>
        <td data-label="USER ID">${data[i].userId}</td>
        <td data-label="BODY">${data[i].body}</td>
        <td data-label="TITLE">${data[i].title}</td>
    </tr>
  `;
  }
}
