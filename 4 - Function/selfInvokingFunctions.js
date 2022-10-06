// "use strict";

//? self Invoking Functions

//! 1. Синтаксис

(function () {
  console.log("self Invoking Functions");
  console.log(this);
})();

//! 2.
(function (w, d) {
  //body
})(window, document);

//! 3.
// function(){
// console.log('first')
// }();
//! 4.
const module = (function () {
  return "first";
})();

console.log(module);
