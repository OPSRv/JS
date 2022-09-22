"use strict";

//? Можна використовувати директиву "%c" для стилів CSS під час виведення в консоль. Частина тексту до директиви не стосується стилю, а частина після - буде стилізована:

console.log(
  "%cThis is My stylish message",
  "color: #dfdf00; font-style: italic; background-color: blue; padding: 15px; font-size: 14px;"
);
