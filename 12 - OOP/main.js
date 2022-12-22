import "./style.scss";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// User.prototype.getFullInfo = function () {
//   return this.name + " " + this.age;
// };

// const user = new User("Israel", 34);
// console.log(user);
// console.log(user.getFullInfo());

// class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getFullInfo() {
//     console.log("getFullInfo()");
//     return this.name + " " + this.age;
//   }
// }
// const user = new User("David", 32);
// console.log(user);

// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   getWidth() {
//     return this._width;
//   }

//   getHeight() {
//     return this._height;
//   }
//   getArea() {
//     return this._width * this._height;
//   }
// }
// const rect = new Rectangle(12, 12);
// console.log(rect.getWidth());
// console.log(rect.getHeight());
// console.log(rect.getArea());
// console.log("rect: ", rect);

// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }

//   //* getter - синтаксис, який пов"язує властивість об"єкта з методом
//   //* при звертанні obj.width буде викликана функція get width()
//   get width() {
//     return this._width;
//   }

//   set width(value) {
//     this._width = value;
//   }

//   get height() {
//     return this._height;
//   }

//   getArea() {
//     return this._width * this._height;
//   }
// }

// const rect = new Rectangle(12, 12);
// console.log("rect: ", rect);
// console.log(rect.width);
// console.log(rect.height);
// rect.width = 30;
// console.log("rect: ", rect.getArea());

// class Rectangle {
//   constructor(width, height) {
//     this._width = width;
//     this._height = height;
//   }
//   get width() {
//     if (this._width === undefined) {
//       this._width = 0;
//     }
//     return this._width;
//   }

//   set width(value) {
//     if (value <= 0) {
//       alert("Значення ширини не бути менше за 0");
//     } else {
//       this._width = value;
//     }
//   }

//   get height() {
//     if (this._height === undefined) {
//       this._height = 0;
//     }
//     return this._height;
//   }

//   set height(value) {
//     if (value <= 0) {
//       alert("Значення висоти не бути менше за 0");
//     } else {
//       this._height = value;
//     }
//   }

//   get area() {
//     return this._width * this._height;
//   }
// }
// const rect = new Rectangle(12, 12);
// console.log("rect: ", rect);
// rect.width = -10;
// rect.height = undefined;
// console.log(rect.width);
// console.log(rect.height);

//! Public class fields

// class Rectangle {
//   width = 0;
//   height = 0;

//   getArea() {
//     return this.width * this.height;
//   }
// }
// let rect = new Rectangle();
// console.log("rect: ", rect);
// rect.width = 12;
// rect.height = 10;
// console.log(rect);
// console.log(rect.getArea());

//! Private fields

class User {
  #name = "";
  #age = 0;
  #id = "";

  constructor(name, age, dateOfBirth, id) {
    this.#name = name;
    this.#age = age;
    this.#id = id;
    this.dateOfBirth = dateOfBirth;
  }
  getName() {
    return this.#name;
  }
  getAge() {
    return this.#age;
  }

  get id() {
    return this.#id;
  }

  set id(value) {
    this.#id = value;
  }

  formatDateOfBirth() {
    if (this.dateOfBirth) {
      this.dateOfBirth = moment(user.dateOfBirth).fromNow();
    }
    return this.dateOfBirth;
  }
}
const user = new User("Marta Kaufman", 32, -1550714524000);
user.id = uuidv4();
console.log(user.id);
console.log(user.formatDateOfBirth());
