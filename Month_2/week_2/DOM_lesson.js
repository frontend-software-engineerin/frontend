// Ways to fetch html elements
// 1. getElementById("id")
let h1 = document.getElementById("first-heading");
// alert(h1.textContent);

//2. querySelector

let para = document.querySelector(".description");
// alert(para.textContent);

// Other ways of fetching elements from the html file
//3. getElementsByClassName
let ps = document.getElementsByClassName("description");
// alert(ps.textContent);

// Modify the elements gotten
h1.textContent = "We are having a revision on DOM";
para.innerHTML = "<em>Hello World</em>";

// styling our elements

// h1.style.color = "white"
h1.style.backgroundColor = "teal";
h1.style.color = "white";
h1.style.padding = "5px";
