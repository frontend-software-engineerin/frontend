// SELECTORS: The ways to get elements
// from html to javascript
//1. id

// Using the getElementById()

let main_heading = document.getElementById("main-heading");
// alert(main_heading.innerText);
// main_heading.innerText = "Goodbye";
main_heading.innerHTML = "<p>Hi, Welcome</p>";
// main_heading.textContent = "This is the content ";

// alert(h1.innerHTML);

// 2. querySelector
let desc = document.querySelector(".description");
// alert(desc.innerText);
// querySelector
// querySelectorAll()

// 3. tagName
// let button = document.getElementsByTagName("button");
// button.innerText = "hello";

// // 4. className

// let description = document.getElementsByClassName("description");
// description.map((a, index) => {
//   alert(a);
// });

// STYLING HTML CODES WITH JAVASCRIPT
main_heading.style.backgroundColor = "orange";
main_heading.style.padding = "10px";
main_heading.style.textAlign = "center";
