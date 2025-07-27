async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "847620fd28980f9f3f7a0e40868be698";

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    document.getElementById("weatherResult").innerHTML = `
      <h3>${data.name}</h3>
      <p>Temperature: ${data.main.temp} °C</p>
      <p>Weather: ${data.weather[0].description}</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerText = "City not found!";
  }
}
