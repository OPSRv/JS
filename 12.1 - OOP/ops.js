import "./style.css";
import javascriptLogo from "./javascript.svg";

class Counter {
  constructor(count = 0, element) {
    this.count = count;
    this.element = element;
  }

  counter() {
    this.element.addEventListener("click", () => {
      this.count += 1;
      this.render();
    });
  }

  render() {
    console.log("🚀 - render");
    document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button">${this.count}</button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;
    this.element = document.querySelector("#counter");
    this.counter();
  }
}
const viewCounter = new Counter();
viewCounter.render();
