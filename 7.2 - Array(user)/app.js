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
          <div class="card">
        <div class="img_wrapper">
          <img src='${RANDOM_USER_URL}${data[i].id}.jpg' alt="" />
        </div>
        <div class="text_wrapper">
          <div class="title">
            <div class="name_text">
              <p class="username">${data[i].username}</p>
              <p class="name">${data[i].name}</p>
            </div>
            <p class="company_name">${data[i].company.name}</p>
          </div>

          <div class="contact_info">
            <p class="phone circle">
              <a href="tel:${data[i].phone}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </a>
            </p>
            <p class="website circle">
              <a href="https://${data[i].website}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                  />
                </svg>
              </a>
            </p>
            <p class="email circle">
              <a href="mailto:${data[i].email}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </a>
            </p>
          </div>

          <div class="address">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <div class="address_text">
              <p>${data[i].address.city}</p>
              <p>${data[i].address.street}</p>
              <p>${data[i].address.suite}</p>
            </div>
          </div>
        </div>
      </div>



  
  `;
  }
}
