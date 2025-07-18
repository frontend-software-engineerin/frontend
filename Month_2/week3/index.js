// CLOSURE

function outer() {
  let count = 0;

  // closure function
  return function inner() {
    count++;
    return count;
  };
}

//
// function outerBox() {
//   let x = 10;

//   function innerBox() {
//     alert(x);
//   }
//   //   return innerBox;
//   innerBox();
// }

// outerBox();

// function createAccount(initialBalance) {
//   let balance = initialBalance;

//   // closure
//   function deposit(amount) {
//     balance += amount;
//     console.log(`new balance is ${balance}`);
//   }

//   return deposit;
// }

// const Mrs_Amaka = createAccount(100);
// Mrs_Amaka(50);

// ARROW FUNCTION
function name(params) {
  // function body
}

let Button = document.getElementById("btn");

// arrow function
() => {};

Button.addEventListener(
  "click",

  () => {
    alert("Hello");
  }
);

// arrow function 2
const greet = (name) => `Hello ${name}`;

// let Button = document.getElementById("btn");
// Button.addEventListener("click", () => {
//   alert("You just clicked on the button");
// });

// function greet(name) {
//   `hello ${name}`;
// }

// alert(greet("Moses"));

// this KEYWORD

// function sayHi() {
//   alert(this.name);
// }

// const person = { name: "john", sayHi };

// ARRAY AND ARRAY METHOD (FUNCTIONS)
// MAP FUNCTION
const integers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map(): create a new array with
//  the results of applying a
// provided function to every element
//  in the original array

const double = integers.map((n) => n * 2);
// alert(double);

// filter(): creates a new array with all
// elements that passes the test implemented by
// the provided function

const ages = [10, 15, 18, 20, 30];

const adults = ages.filter((age) => age >= 18);

// alert(adults);

// Reduce: reduces the array into a single value

const price = [10, 20, 30];

const total = price.reduce((sum, p) => sum + p);
// alert(total);

// forEach(): this executes a provided function once
// on each element of an array without returning an array

const fruits = ["apple", "banana", "mango"];
// fruits.forEach((f) => alert(f));

// 1. create a button and when clicked on the button
// you get an alert. (use an arrow function)

// 2. use the filter method on an array
// to get the ages that is below 18

let people = [12, 15, 13, 27, 19, 18, 30, 20];
