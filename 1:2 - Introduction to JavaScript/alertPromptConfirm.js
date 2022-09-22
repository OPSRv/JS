let numberExample = prompt("Введіть число"); //? prompt - Запит на введення
//! повертає(return) введене значення
console.log(numberExample); //? Виводить введене значення в консоль

alert(numberExample); //? alert - Виводить введене значення у модальному вікні
alert("Повідомлення");
//! alert повертає(return) undefined

let newBool = confirm("Чи подобаєтсья JS"); //? Запитує ок чи скасувати
console.log(newBool); //? виводить відповідь, як boolean значення
alert(` Чи подобаєтсья JS -  ${newBool}`); //? виводить значення змінної у модальному вікні
//? ` ` - використовуються шаблонні рядки
//! confirm - повертає(return) boolean значення
