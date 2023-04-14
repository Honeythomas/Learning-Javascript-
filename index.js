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

// function x() {
//   var a = 7;
//   return function y() {
//     console.log(a);
//   };
// }
// var z = x();
// console.log(z);

//Practice(setTimeOut)

// function a() {
//   var i = 1;
//   setTimeout(function () {
//     console.log(i);
//   }, 2000);
//   console.log("Hello World");
// }
// a();

// function a() {
//   var z = 100;
//   setTimeout(function () {
//     console.log(z);
//   }, 5000);
//   console.log("hello world");
// }
// a();

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("hey honey");
// }
// x();

//for loop using var

// function a() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, i * 1000);
//     }
//     close(i);
//   }
//   console.log("Hello World");
// }
// a();

//practice

// function x() {
//   for (let i = 1; i <= 5; i++) {
//     setTimeout(function () {
//       console.log(i);
//     }, i * 1000);
//   }
//   console.log("Hello World");
// }
// x();

// function f() {
//   for (var i = 1; i <= 5; i++) {
//     function close(i) {
//       setTimeout(function () {
//         console.log(i);
//       }, 1000 * i);
//     }
//     close(i);
//   }
//   console.log("hello world");
// }
// f();

//counter

// function counter() {
//   var count = 0;
//   return function incrementCounter() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();

//practice

// function counter() {
//   var count = 0;
//   return function incrementCount() {
//     count++;
//     console.log(count);
//   };
// }
// var counter1 = counter();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();
// counter1();

//constructor function for increment and decrement of count

// function Counter() {
//   var count = 0;
//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };

//   this.decrementCount = function () {
//     setTimeout(function () {
//       count--;
//       console.log(count);
//     }, 2000);
//   };
// }
// var counter1 = new Counter();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
// counter1.decrementCount();

//practice

// function Counter() {
//   var count = 0;
//   this.incrementCount = function () {
//     count++;
//     console.log(count);
//   };
//   this.decrementCount = function () {
//     setTimeout(function () {
//       count--;
//       console.log(count);
//     }, 2000);
//   };
// }
// var counter1 = new Counter();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.incrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
// counter1.decrementCount();
// counter1.decrementCount();

//function statement or function declaration

// function s() {
//   console.log("hey");
// }

//function expression

// var b = function () {
//   console.log("hello world");
// };

// anonymous function

// function () {
//     console.log("hey");
// }

//Named function expression

// var b = function x() {
//   console.log("Yo bro");
// };
// b();

//callback

// setTimeout(function () {
//   console.log("timmer");
// }, 5000);
// function x(y) {
//   console.log("x");
//   y();
// }
// x(function y() {
//   console.log("y");
// });

//practice

// setTimeout(function () {
//   console.log("timer");
// }, 5000);
// function y(x) {
//   console.log("y");
//   x();
// }
// y(function x() {
//   console.log("x");
// });

//event Listner

// var element = document.getElementById("clickMe");
// element.addEventListener("click", function a() {
//   console.log("Button clicked");
// });

// function attachEventListner() {
//   let count = 0;
//   var element = document.getElementById("clickMe");
//   element.addEventListener("click", function a () {
//     console.log("Button Clicked", ++count);
//   });
// }
// attachEventListner();

//practice

// function attachEventListner() {
//   let count = 0;
//   var element = document.getElementById("clickMe");
//   element.addEventListener("click", function a() {
//     console.log("Hello world", ++count);
//   });
// }
// attachEventListner();

//higher order function

// function x() {
//   console.log("hello world");
// }
// function y(x) {
//   x();
// }
//y is higher order function and x is the call back function

// const radius = [3, 4, 6, 7];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

//practice

// const radius = [2, 7, 9, 5];

// const calculateArea = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(Math.PI * radius[i] * radius[i]);
//   }
//   return output;
// };
// console.log(calculateArea(radius));

// const calculateDiameter = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * radius[i]);
//   }
//   return output;
// };
// console.log(calculateDiameter(radius));

// const calculateCircumference = function (radius) {
//   const output = [];
//   for (let i = 0; i < radius.length; i++) {
//     output.push(2 * Math.PI * radius[i]);
//   }
//   return output;
// };
// console.log(calculateCircumference(radius));

//map

// const arr = [2, 4, 8, 6];

// function doubles(x) {
//   return x * 2;
// }
// const output = arr.map(doubles);

// console.log(output);

// function tripple(y) {
//   return y * 3;
// }
// const input = arr.map(tripple);

// console.log(input);

// function binary(a) {
//   return a.toString(2);
// }

// const show = arr.map(binary);
// console.log(show);

//filter

// const arr = [2, 4, 3, 8, 6, 7];

// function isOdd(x) {
//   return x % 2;
// }

// const output = arr.filter(isOdd);
// console.log(output);

// function isEven(y) {
//   return y % 2 === 0;
// }

// const input = arr.filter(isEven);
// console.log(input);

//reduce

// const arr = [2, 4, 3, 8, 6, 7];
// function findSum(arr) {}

// const output = arr.reduce(function (acc, curr) {
//   acc = acc + curr;
//   return acc;
// });

//callback

// console.log("hello world");

// setTimeout(function () {
//   console.log("hello Honey");
// }, 5000);

// console.log("hello");

// const cart = ["shoes", "pants", "kurta", "tshirt"];

//callback hell or pyramid of DOOM

// api.createOrder(cart, function () {
//   api.proceedToPayment(function () {
//     api.orderSummery(function () {
//       api.updateWallet();
//     });
//   });
// });

//inversion of control

// api.createOrder(cart, function () {
//   api.proceedToPayment();
// });

//without promise

// const carts = ["shoes", "pants", "kurta", "tshirt"];

// createOrder(carts, function (orderId) {
//   proceedToPayment(orderId);
// });

//promises

// const cart = ["shoes", "pants", "kurta", "tshirt"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function(paymentInfo) {
//     console.log(paymentInfo)
//   })
//   .catch(function (err) {
//     console.log(err.message);
//   });

// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not valid");
//       reject(err);
//     }
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(function () {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Resolved");
//   });
// }

// function validateCart(cart) {
//   return false;
// }

//array.find

// const num = [45, 55, 30, 100];

// const numGreaterThanFifty = num.find((element) => element > 50);
// console.log(numGreaterThanFifty);

//recursion

// function demo () {
//     console.log("hello world");
//     demo();
// }
// demo();

//reverse a string

// function reversedString (str) {
//     let reversedStr = "";
//     for (let i = str.length - 1; i >= 0; i--){
//         reversedStr += str[i];
//     }
//     return reversedStr;
// }
// reversedString("hello")

//factorize a number

function factorize(num) {
  let product = 1;
  for (let i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
factorize("5");
