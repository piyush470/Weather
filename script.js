let apiKey = "f176957885884b46b9e134540262209";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const mainWeather = document.querySelector(".main-weather");
const details = document.querySelector(".details");

cityInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    let city = cityInput.value;
    cityInput.value = "";
    getData(city);
  }
});

getLocation();

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success, error);
  }
}

function success(position) {
  let lattitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  getData(`${lattitude},${longitude}`);
}

function error() {
  console.log("Location access not granted");
}
searchBtn.addEventListener("click", function () {
  let city = cityInput.value;
  cityInput.value = "";
  getData(city);
});
// JSON.parse() -- .json difference??

// Key DifferencesNature and Execution:JSON.parse(): It is synchronous. It blocks execution until the string is completely parsed..json(): It is asynchronous and returns a Promise that resolves to a JavaScript object.Input Type:JSON.parse(): Takes a raw JSON-formatted text/string directly (e.g., '{"name": "John"}')..json(): Called on an HTTP Response object (e.g., from fetch()) to read its body stream.
async function getData(city) {
  let api = getApi(city);
  let apiData = await fetch(api);
  let data = await apiData.json();
  console.log(data);
  updateUI(data);
}

function updateUI(data) {


  let { location, current } = data;
  let { name: city, country, localtime: timeAndDate } = location;
  let { temp_c, wind_kph, humidity, feelslike_c, uv, condition } = current;
  let { text: weatherStatus, icon: image } = condition;

  mainWeather.innerHTML = `  <div class="weather-info">
          <div class="location">📍 ${city}, ${country}</div>

          <div class="date">${timeAndDate}</div>

          <div class="temperature">${temp_c}°</div>

          <div class="condition">${weatherStatus}</div>
        </div>

        <img
          class="weather-icon"
          src="${image}"
          alt=""
        />`;

  details.innerHTML = `<div class="detail-card">
          <div class="detail-icon">💧</div>
          <div class="detail-title">Humidity</div>
          <div class="detail-value">${humidity}%</div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">💨</div>
          <div class="detail-title">Wind</div>
          <div class="detail-value">${wind_kph} km/h</div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">🌡️</div>
          <div class="detail-title">Feels Like</div>
          <div class="detail-value">${feelslike_c}°</div>
        </div>

        <div class="detail-card">
          <div class="detail-icon">☀️</div>
          <div class="detail-title">UV Index</div>
          <div class="detail-value">${uv}</div>
        </div>`;

};

function getApi(city) {
  return `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;
}

