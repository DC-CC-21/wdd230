String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

let key = "f2e36b633016e8e4455cd9e98b32a633";
let lat = 20.423;
let lon = -86.9223;
let forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
let currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
let weatherDetailsEl = document.querySelector(".weatherDetails");
let currentWeatherImg = document.querySelector("#current img");
let currentWeatherP = document.querySelector("#current p");
let forecastEl = document.querySelector("#forecast");
let bannerP = document.querySelector(".banner p");

let detailMap = {
  feels_like: {
    title: "Feels Like",
    unit: "&deg;F",
    image: "./images/feels-like_xxsmall.webp",
  },
  temp: {
    title: "Temp",
    unit: "&deg;F",
    image: "./images/temp_xxsmall.webp",
  },
  temp_max: {
    title: "Max Temp",
    unit: "&deg;F",
    image: "./images/max-temp_xxsmall.webp",
  },
  temp_min: {
    title: "Min Temp",
    unit: "&deg;F",
    image: "./images/min-temp_xxsmall.webp",
  },
  humidity: {
    title: "Humidity",
    unit: "%",
    image: "./images/humidity_xxsmall.webp",
  },
  pressure: {
    title: "Pressure",
    unit: "hPa",
    image: "./images/pressure_xxsmall.webp",
  },
  wind: {
    title: "Wind Speed",
    unit: "mph",
    image: "./images/wind-speed_xxsmall.webp",
  },
  windchill: {
    title: "Wind Chill",
    unit: "&deg;F",
    image: "./images/windchill_xxsmall.webp",
  },
};

function windchillFn(t, v) {
  if (t <= 50 && v > 3) {
    return (
      35.74 +
      0.6215 * t -
      35.75 * Math.pow(v, 0.16) +
      0.4275 * t * Math.pow(v, 0.16)
    );
  }
  return "N/A";
}
function showCurrentWeather(weather, temp) {
  currentWeatherImg.src = `https://openweathermap.org/img/wn/${weather.icon}@4x.png`;
  currentWeatherImg.alt = weather.description;
  currentWeatherP.innerHTML = `${weather.description.toTitleCase()} ${temp}&deg;F`;
  currentWeatherImg.setAttribute("width", "200");
  currentWeatherImg.setAttribute("height", "200");
  currentWeatherImg.setAttribute("loading", "lazy");
}
function currentWeatherDetails(details) {
  Object.keys(detailMap)
    // .sort()
    // .reverse()
    .forEach((detail) => {
      createWeatherCard(details, detail);
    });
}
function createWeatherCard(details, detail) {
  let div = document.createElement("div");
  let img = document.createElement("img");
  let p = document.createElement("p");

  img.src = detailMap[detail].image;
  img.alt = detailMap[detail].title;
  img.setAttribute("width", "50");
  img.setAttribute("height", "50");
  img.setAttribute("loading", "lazy");

  let value = details[detail];
  if (typeof value === "number") {
    value = Math.round(value) + detailMap[detail].unit;
  }
  p.innerHTML = `${detailMap[detail].title}: ${value}`;

  div.append(img, p);
  weatherDetailsEl.append(div);
}

function createForecastCards(forecast) {
  forecast.forEach((day) => {
    let div = document.createElement("div");
    let img = document.createElement("img");
    let p = document.createElement("p");
    img.src = `https://openweathermap.org/img/wn/${day.weather[0].icon}.png`;
    p.innerHTML = `${day.weather[0].description.toTitleCase()} ${
      day.main.temp
    }&deg;F`;
    img.alt = day.weather[0].description;
    img.setAttribute("width", "50");
    img.setAttribute("height", "50");
    img.setAttribute("loading", "lazy");
    div.append(img, p);
    forecastEl.append(div);
  });
}

fetch(forecastURL)
  .then((res) => res.json())
  .then((weatherData) => {
    // # Remove loading text
    forecastEl.lastElementChild.remove();

    // # create 5 day forecast cards
    createForecastCards(weatherData.list.slice(0, 5));
  });

fetch(currentURL)
  .then((res) => res.json())
  .then((jsObj) => {
    // # Remove loading text
    weatherDetailsEl.lastElementChild.remove();

    // # add wind/windchill to weather main
    jsObj.main.wind = jsObj.wind.speed;
    jsObj.main.windchill = windchillFn(jsObj.main.temp, jsObj.wind.speed);
    bannerP.innerHTML = `Warm today with a high temperature of ${Math.round(
      jsObj.main.temp_max
    )}&deg;F`;

    // # show current weather details
    currentWeatherDetails(jsObj.main);

    //# show current weather
    showCurrentWeather(jsObj.weather[0], jsObj.main.temp);
  });
