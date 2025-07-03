let first_number = 4; // mutable variable
let last_number = 3;

const PI = 3.14; // immutable

// an arithmetic operation
// addition
let sum = first_number + last_number;
// alert(sum);

i_have_atm_card = true;
i_have_the_password = true;

greater_than_18 = true;
has_money_to_bet = true;

alert(i_have_atm_card && i_have_the_password);
// logical operators
// i_have_atm_card &&  i_have_the_password

// I_have_atm_card || I_have_mobile_app

// !i_am_sad

let age = 20; // Number data type
let string_age = "20"; // String data type

age == string_age; // true

age === string_age; // false

//

let a = 2;
let b = 4;

// create
function add() {
  let sum = a + b;
  alert(sum);
}

// using the function created here
// add();

// function expression
let name = "moses";

let greet = () => {
  alert(3);
};

// greet();

// arrow function
// () => {
//   alert(3);
// };

// parameters and arguments
function minus(a, b) {
  let result = a - b;
  alert(result);
}

// minus(6, 3);

// return values
function myName(name) {
  return name;
}

// alert(myName("Moses"));

if (2 === "5") {
  // code here runs if expression
  // evaluates to true
  alert("Checking for if statment");
} else {
  alert("Expression didnt match");
}

if (i_have_atm_card) {
  // enter your pin to continue
  if (i_have_the_password) {
    // enter amount to withdraw
    if (amount_within_the_range_of_balance) {
      // withdraw
    } else {
      // insufficient fund
    }
  } else {
    // alert wrong password
  }
} else {
  // use mobile app withdraw
}

// loop: iteration: repeats a process

for (let index = 0; index < array.length; index++) {
  const element = array[index];
}

for (let start = 0; start < 5; start++) {
  // repeat until
}
