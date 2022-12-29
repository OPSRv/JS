import "./css/settings.scss";

class Todo {
  constructor(text) {
    this.text = text;
    this.isCompleted = false;
  }
}

class ToDoList {
  constructor(selectedHtmlElement) {
    this.todos = [];
    this.completed = [];
    this.selectedHtmlElement =
      selectedHtmlElement || document.querySelector("#app");
    this.render(this.todos);
  }

  render(todoArray) {
    this.selectedHtmlElement.innerHTML = "";
    this.layout();
    this.addListWithToDo(todoArray);
  }

  addToDoToList(text) {
    console.log("addToDoToList", text);
    if (text == "" || text == null) {
      alert("The field cannot be empty");
    } else {
      this.todos.push(new Todo(text));
    }
    this.render(this.todos);
  }

  addListWithToDo(todoArray) {
    console.log("addListWithToDo", todoArray);
  }

  layout() {
    console.log("layout");
    // header
    const header = document.createElement("header");
    header.className = "header";
    // logo
    const logo = document.createElement("img");
    logo.src = "./img/logo.svg";
    logo.alt = "logo";
    header.appendChild(logo);
    // input_wrapper
    const input_wrapper = document.createElement("div");
    input_wrapper.className = "input_wrapper";
    header.appendChild(input_wrapper);
    // input
    const input = document.createElement("input");
    input.className = "input";
    input.type = "text";
    input.placeholder = "Add a new task";
    // button
    const button = document.createElement("button");
    button.className = "button";
    button.innerText = "Create";
    const plus_img = document.createElement("img");
    plus_img.src = "./img/plus.svg";
    plus_img.alt = "plus";
    button.appendChild(plus_img);
    input_wrapper.appendChild(input);
    input_wrapper.appendChild(button);

    button.addEventListener("click", () => {
      this.addToDoToList(input.value);
      input.value = "";
    });

    input.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        this.addToDoToList(input.value);
        input.value = "";
      }
    });

    // main
    const main = document.createElement("main");
    main.className = "main";

    this.selectedHtmlElement.appendChild(header);
    this.selectedHtmlElement.appendChild(main);
  }
}
const todo = new ToDoList();
