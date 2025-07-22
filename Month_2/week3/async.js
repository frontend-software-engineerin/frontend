// function greet(name, callback) {
//   setTimeout(() => {
//     callback(`Hello ${name}`);
//   }, 2000);
// }

// Timers
// setInterval(
//   () => {
//     // alert("This is my timeout running after 6000 seconds");
//   },

//   200
// );

// alert("done with timeout");
// let output = document.getElementById("heading");

// setInterval(() => {
//   output.innerText = "Hello after sometime";
// }, 300);

// TRACK THE NUMBER OF TIME TO RUN AN INTERVAL
// let count = 0;

// const intervalId = setInterval(
//   () => {
//     alert("hello");
//     count++;

//     if (count === 3) {
//       clearInterval(intervalId);
//       // alert message after interval is done running
//       alert("Interval is done running");
//     }
//   },

//   4000
// );

// setTimeout(() => {}, timeout);

// Callback function: A function that is passed as
// a parameter to another function

// e.g  function greet(hello(),  b ){}
// the hello() inside the greet function is the callback function

//
// CLASSWORK 1: USE SETIMEOUT TO ALERT ANYTHING AFTER 10,000 MIN

setTimeout(() => {
  alert("hello");
}, 7000);

// CLASSWORK 2: USE SETINTERVAL TO ALERT SOMETHING ON YOUR BROWSER REPITETIVELY
// AFTER 2000 (Mini seconds)
// setInterval(
//   () => {
//     // alert("This is my timeout running after 6000 seconds");
//   },

//   200
// );
