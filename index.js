// let promise = new Promise(function (resolve, reject) {
//   alert("Hello");
//   resolve(56);
// });

// console.log("hello world one");
// setTimeout(function () {
//   console.log("hello world two in 2 sec");
// }, 2000);
// console.log("My name is" + " Hello three");
// console.log(promise);

// var n = 2;
// function square(num) {
//   var ans = num * num;
//   return ans;
// }

// var x = 1;
// a();
// b();
// console.log(x);

// function a() {
//   var x = 10;
//   console.log(x);
// }

// function b() {
//   var x = 100;
//   console.log(x);
// }

// var a = 10;
// function b() {
//   var x = 10;
// }
// console.log(window.a);
// console.log(this.a);

//scope

// function a() {
//   c( );
//   function c() {
//     console.log(b);
//   }
// }
// var b = 10;
// a();

//let and const

// console.log(a);
// const a = 10;

// var b = 100;

//shadowing

// var a = 100;
// {
//   var a = 10;
//   let b = 20;
//   const c = 30;
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// console.log(a);

//arrow function

// hello = () => {
//   return "hello World";

// };

//Closure

// function x() {
//   a = 7;
//   function y() {
//     console.log(a);
//   }
//   y();
// }
// x();

function x() {
  var a = 7;
  return function y() {
    console.log(a);
  };
}
var z = x();
console.log(z);
