# WeatherNow — Weather App

A clean, responsive weather application built with **HTML, CSS, and JavaScript**. WeatherNow lets users search for a city or use their browser location to view current weather conditions in a simple, modern dashboard.

<p align="center">
  <a href="https://piyush-weather.vercel.app/">
    <img src="https://img.shields.io/badge/Live%20Demo-Visit%20WeatherNow-2563EB?style=for-the-badge&logo=vercel&logoColor=white" alt="Live Demo">
  </a>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5">
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3">
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript">
</p>

## 🌐 Live Demo

**Try the deployed application:** https://piyush-weather.vercel.app/

## 📌 About the Project

WeatherNow was created as a hands-on web development project to practice working with a third-party weather API, asynchronous JavaScript, browser geolocation, and dynamic DOM updates.

The app retrieves current weather data from **WeatherAPI.com** and displays it in a responsive dashboard. Users can enter a city name or allow location access to get weather for their current coordinates.

## ✨ Features

- **Search by city:** Find current weather by entering a city name.
- **Enter-key support:** Submit a city search using the Enter key.
- **Current-location weather:** Uses the browser Geolocation API to request latitude and longitude.
- **Live weather information:** Displays the location, local date/time, temperature, and weather condition returned by the API.
- **Weather details:** Shows humidity, wind speed, feels-like temperature, and UV index.
- **Dynamic weather icon:** Displays the condition icon provided by WeatherAPI.
- **Responsive UI:** Layout adapts to desktop, tablet, and mobile screens.
- **Modern dashboard design:** Gradient weather panel, clean detail cards, and subtle animations.

## 🧰 Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Responsive layout, styling, and animations |
| JavaScript (ES6+) | Search handling, API requests, and dynamic UI updates |
| WeatherAPI.com | Current weather data and condition icons |
| Browser Geolocation API | Retrieves coordinates when location permission is granted |
| Vercel | Deployment and hosting |

## 📂 Project Structure

```text
WeatherNow/
├── index.html   # Main application markup
├── style.css    # Responsive styling and dashboard design
└── script.js    # WeatherAPI requests, geolocation, and UI updates
```

## ⚙️ How It Works

1. On page load, the app requests browser location permission.
2. If permission is granted, it uses the latitude and longitude to request current weather.
3. Users can alternatively search for a city using the search field and button (or press Enter).
4. JavaScript sends a request to WeatherAPI's current-weather endpoint.
5. The response is parsed as JSON, and the dashboard updates with the returned weather information.

### Weather data displayed

- Location and country
- Local date/time
- Temperature (°C)
- Weather condition and icon
- Humidity
- Wind speed (km/h)
- Feels-like temperature (°C)
- UV index

## 🚀 Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_GITHUB_USERNAME/YOUR_REPOSITORY_NAME.git
cd YOUR_REPOSITORY_NAME
```

Replace the placeholders with your GitHub username and repository name.

### 2. Configure your WeatherAPI key

Create an API key at [WeatherAPI.com](https://www.weatherapi.com/).

The current project uses a WeatherAPI key in `script.js`. Before publishing or sharing the repository, remove any exposed key and configure a replacement. **A key embedded in frontend JavaScript is visible to anyone using the site.** For a public deployment, use a backend/serverless function to keep the key private, and apply any available API-key restrictions.

### 3. Start the app

This is a static frontend project. You can:

- Open `index.html` directly in your browser, or
- Use the **Live Server** extension in Visual Studio Code for local development.

Make sure the API key is configured and that your browser has an internet connection. Location-based weather requires the user to grant location permission; city search is an alternative.

## 🔑 API Reference

This project uses WeatherAPI's Current Weather endpoint:

```text
https://api.weatherapi.com/v1/current.json
```

The request includes the API key and a query (`q`) containing a city name or latitude/longitude coordinates.

Official documentation: [WeatherAPI — Current Weather API](https://www.weatherapi.com/docs/)

## 🖼️ Screenshots

Add screenshots of the deployed application to your repository and update the paths below:

```md
![WeatherNow Dashboard](screenshots/weather-dashboard.png)
```

## 🛣️ Possible Future Improvements

- Add a multi-day weather forecast
- Add recent-search history and favorite cities
- Add loading indicators and user-friendly error messages
- Add unit switching (°C / °F)
- Improve API-key security with a serverless backend
- Add weather-based background themes

## 👨‍💻 Developer

**Piyush Raikwar**

- GitHub: [@piyush470](https://github.com/piyush470)
- Live Project: [WeatherNow](https://piyush-weather.vercel.app/)

---

<p align="center">
  Made with HTML, CSS, JavaScript, and WeatherAPI.
  <br>
  <b>Check the weather. Plan your day.</b>
</p>
