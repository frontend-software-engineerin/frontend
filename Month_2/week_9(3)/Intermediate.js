// closure: function that remembers its outer function
// even when the program is done executing

// global variable
// let counter = 1;

// function outer() {
//   // local variable
//   let counter = 0;

//   return function inner() {
//     //   let counter = counter + 1;
//     counter++;
//     return counter;
//   };
// }

// forEach(): Executes a function on each item (it doesnt return a new array)

const fruits = ["apple", "banana"];
fruits.forEach((n) => alert(n));

// const firstCount = outer();
// alert(firstCount());
// alert(firstCount());

// Arrow function: A way shortening our function

function add_then_multiply(a, b) {
  alert(a + b);

  //   an arrow function
  () => {
    alert(a * b);
  };
}

// Data type continuation
// Array
// map method: map operates on all the individual elements inside of an array.
let arrayOfEvenNumbers = [2, 4, 6, 8];
const doubled = arrayOfEvenNumbers.map((n) => {
  n * 2;
});

const halved = arrayOfEvenNumbers.map((n) => {
  n / 2;
});

doubled = [4, 8, 12, 16];
halved = [1, 2, 3, 4];

const staffAccountNumber = [833224, 23424, 2342342, 32424];
const paySalary = staff.map((n) => {
  n.deposit$50;
});
// arrayOfEvenNumbers.map(ljsldfjalsdfdjl);

// const creditAccount = [];

// Filter: This method returns elements that match a condition.
const ages = [15, 22, 30];
const adults = ages.filter((age) => age >= 18); // [22, 30]

adults = [22, 30];

// Reduce method: reduces the array into a single value

const prices = [10, 20, 30];
const total = prices.reduce((sum, p) => sum + p, 0); // 60

total = [60];

// datatype
// Object: that represents in a key-value pair

[]; // array
{
} // object

const student = {
  name: "Moses",
  dept: "CSC",
  faculty: "Information Technology",
  nationality: "Nigerian",
  courses: 7,
  male: True,

  //   method: function to do something inside of our object
  greet() {
    return `Hello ${this.name}`;
  },
};

let studentFaculty = student.faculty;

// student.greet();

alert(student.greet());
