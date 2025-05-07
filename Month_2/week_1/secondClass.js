// Operations
// Arithmetic operation

let a = 5;
let b = 7;

let sum = a + b;

// exponential (**)
let a_square = a ** 2; //exponential
let a_remainder = a % 2; // modulus

// alert(a_remainder);
// Comparison operation
// alert(5 === "5");//

// Logical operation
1 == 1 && 2 == 2; // AND  operation

1 == 1 || 2 == 2; // OR operation

1 != 2; // NOT operation

// Function

let x = 2;
let y = 9;

// declartion of a function

function addNumber(c, d) {
  alert(c + d);
  // code that we want the function to process
}

// invoking of the function
// addNumber(2, 6);

// declaration of a function
function greet(username) {
  alert(`Hello, , ${username}`);
}

// invoking of the function
// greet("Moses");

function expo(a) {
  //   alert(a ** 2);
  return a ** 2;
}

function sum_expo(b, c) {
  alert(expo(b) + expo(c));
}

// sum_expo(2, 3);
