// Selecting by ID

console.log(heading); // <h1 id="main-heading">Welcome</h1>
// alert(heading);
// Selecting with querySelector
const para = document.querySelector(".description");
console.log(para); // <p class="description">DOM manipulation is powerful.</p>

// Selecting a button
const button = document.querySelector("#click-me");
console.log(button.textContent); // Click Me

// Getting elements from our HTML
document.getElementById("main-heading");


document.querySelector("#main-heading");
document.querySelector(".description");
// document.querySelectorAll

// heading.textContent = "Hello, Developer";

// para.innerHTML = "<strong>This is bold text!</strong>";
