let click_button = document.getElementById("but");

// first approach
click_button.addEventListener("click", function () {
  alert("You just clicked the button");
});

// Second approach
// click_button.onclick(function () {
//   alert("You just clicked the button");
// });

let second_button = document.querySelector(".but2");
second_button.addEventListener("click", function () {
  alert("You just clicked me twice");
});

// Mouseout and mouseover event
let heading_three = document.getElementById("head3");
// heading_three.addEventListener("mouseover", function () {
//   alert("hover on the heading three elements");
// });

let hoverBox = document.getElementById("hoverBox");

// hover events
hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "teal";
  hoverBox.textContent = "Your mouse is on me";
  hoverBox.style.textAlign = "center";
  hoverBox.style.color = "white";
});

// mouse-out events
hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "gray";
  hoverBox.textContent = "Mouse goes away";
});

// Keyup events
let inputField = document.getElementById("textInput");

inputField.addEventListener("keydown", function (event) {
  console.log("Key pressed", event.key);
  //   console.log("Key code", event.keyCode);

  if (event.key === "Enter") {
    alert("Enter Key was pressed");
  }

  if (event.key === "Escape") {
    alert("Escape button clicked");
  }
});

// Event propagation

document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent is clicked");
});

document.getElementById("child").addEventListener("click", function () {
  console.log("Child elements clicked");
});

document.getElementById("button").addEventListener("click", function () {
  console.log("button is clicked");
});

// first approach
h1.addEventListener("click", function (params) {});

// second approach
h1.onclick(function name(params) {});
