function search(event) {
  event.preventDefault();
  let locationInput = document.querySelector("#city-input");
  let city = locationInput.value;
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${locationInput.value}`;
  let apiKey = "dc1t52c7a5ef21f2038dbd4aa380a4o7";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(displayTemperature);
}
function displayTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `☀️${temperature}°C `;
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let now = new Date();
let p = document.querySelector(".time-date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = days[now.getDay()];
let hour = now.getHours();
let minutes = now.getMinutes();
p.innerHTML = `${today} ${hour}:${minutes}`;
