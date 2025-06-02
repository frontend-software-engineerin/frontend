// async function fetchUser() {
//   try {
// const res = await fetch("https://api.github.com/users/octocat");
// const user = await res.json();
// console.log(user);
//   } catch (error) {
// console.error("Failed to fetch user:", error);
//   }
// }

// fetchUser();

// Code for the weather app
async function getWeather() {
  const city = document.getElementById("cityInput").value;

  const apiKey = "847620fd28980f9f3f7a0e40868be698";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("weatherResult").innerHTML = `
      <h3 id="cityName">${data.name}</h3>
      <p id="temperature">Temperature: ${data.main.temp} °C</p>
      <p id="weather">Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "City not found!";
  }

}
