// Selecting elements using DOM methods
const form = document.getElementById("feedbackForm");

// step 1: get the input elements and the button elements

let name = document.getElementById("name");
let email = document.getElementById("email");
let textArea = document.getElementById("message");
let submit_button = document.getElementById("submitBtn");
let reset_button = document.getElementById("resetBtn");
let output = document.getElementById("output");
// step 2: get the data that is being entered by the user

// step 3: submit the form and output the feedback to user

submit_button.addEventListener("click", function (e) {
  e.preventDefault();
  let nameData = name.value;
  let emailData = email.value;
  let textAreaData = textArea.value;

  output.innerHTML = `<h3>${nameData}</h3>
<h4>${emailData}</h4>`;

  output.style.display = "block";
});

// =====================================================
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const messageInput = document.querySelector("#message");
// const outputDiv = document.getElementById("output");
// const resetBtn = document.getElementById("resetBtn");

// // Event: Form submission
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // Prevent actual form submission

//   // Get values
//   const name = nameInput.value.trim();
//   const email = emailInput.value.trim();
//   const message = messageInput.value.trim();

//   if (name && email && message) {
//     // Change content dynamically using innerHTML
//     outputDiv.innerHTML = `
//       <h3>Thank you for your feedback, ${name}!</h3>
//       <p><strong>Email:</strong> ${email}</p>
//       <p><strong>Message:</strong> ${message}</p>
//     `;

//     // Display output and apply style
//     outputDiv.style.display = "block";
//     outputDiv.style.borderColor = "green";
//   } else {
//     outputDiv.textContent = "Please fill all fields.";
//     outputDiv.style.display = "block";
//     outputDiv.style.borderColor = "red";
//   }
// });

// // Event: Reset form
// resetBtn.addEventListener("click", () => {
//   nameInput.value = "";
//   emailInput.value = "";
//   messageInput.value = "";
//   outputDiv.style.display = "none";
// });
