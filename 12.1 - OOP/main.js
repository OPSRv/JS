import "./style.css";

// class Parent{

// }

// class Child extends Parent {
//   //
// }

class Human {
  constructor(firsName, lastName) {
    this.firsName = firsName;
    this.lastName = lastName;
  }
  sayHello() {
    console.log("sayHello - ", `Hello, I'm ${this.firsName}`);
  }
}
// const h = new Human("Jack", "Brown");
// console.log(h);
// h.sayHello();

class Developer extends Human {
  constructor(firsName, lastName, experience) {
    super(firsName, lastName);
    this.experience = experience;
  }
  code() {
    console.log(`I'm Developer ${this.firsName} i write code`);
  }
  sayHello() {
    // super.sayHello();
    console.log(
      "sayHello",
      `I'm Developer i have ${this.experience} experience`
    );
  }
}
const developer = new Developer("John", "Sina", "5 years");
developer.code();
developer.sayHello();
console.log("developer: ", developer);

class Desinger extends Human {
  constructor(firsName, lastName, experience, theme, url) {
    super(firsName, lastName);
    this.experience = experience;
    this.theme = theme;
    this.url = url;
    console.log("this", this);
  }
  makeDesing() {
    console.log(`I'm Desinger i have ${this.experience} experience`);
    return {
      name: this.firsName + " " + this.lastName,
      portfolio: [
        {
          theme: this.theme,
          url: this.url,
        },
      ],
      experience: this.experience,
    };
  }
}
const desinger = new Desinger(
  "Daniella",
  "Phillips",
  "3 years",
  "nature",
  "http://localhost:5173/"
);
console.log("desinger: ", desinger);
console.log(desinger.makeDesing());
