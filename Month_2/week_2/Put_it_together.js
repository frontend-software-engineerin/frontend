const heading = document.getElementById("main-heading");
const para = document.querySelector(".description");
const button = document.getElementById("change-btn");

button.addEventListener("click", () => {
  heading.textContent = "DOM Updated!";
  para.innerHTML = "<em>Now this is italic</em>";
  heading.style.color = "red";
  para.classList.add("highlight");
});
