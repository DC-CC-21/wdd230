String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

let key = "f2e36b633016e8e4455cd9e98b32a633";
let lat = 44.0537;
let lon = -71.1284;
let url2 = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}&units=imperial`;
// console.log(url2);

fetch(url2)
  .then((res) => res.json())
  .then((weatherData) => {
    displayWeather(weatherData);
});

let weatherDataEl = document.getElementById("weatherData");

function createWeatherCard(value, index) {
  let card = document.createElement("div");
  let h3 = document.createElement("h3");
  let img = document.createElement("img");
  let p = document.createElement("p");
  let p2 = document.createElement("p");

  card.classList.add("card");
  card.classList.add(`w${index}`);

  if (index === 0) {
    h3.innerHTML = "Current";
  } else if (index === 1) {
    h3.innerHTML = "Tomorrow";
  } else {
    h3.innerHTML = `+${index} Days`;
  }

  img.src = `https://openweathermap.org/img/wn/${value.weather[0].icon}@2x.png`;
  img.alt = "weatherImg";
  img.width = 100;
  img.height = 100;

  p.innerHTML = `${value.weather[0].description.toTitleCase()} ${value.main.temp.toFixed(
    0
  )}&deg;F`;
  p2.innerHTML = `Wind: ${value.wind.speed.toFixed(0)}mph`;

  card.append(h3, img, p, p2);
  weatherDataEl.append(card);
}
function displayWeather(data) {
  //create weather card
  let wd = filterData(data);

  for (let i = 0; i < 3; i++) {
    let value = wd[i];
    createWeatherCard(value, i);
  }

  // calculate windchill
  let weatherPs = document.querySelectorAll("#weatherData div p");
  for (let i = 0; i < weatherPs.length; i += 2) {
    let degrees = cleanHTML(weatherPs[i].innerHTML);
    let windspeed = cleanHTML(weatherPs[i + 1].innerHTML);
    calculateWindchill(degrees, windspeed, weatherPs[i].parentElement);
  }
}

function filterData(data) {
  let currentData = data.list[0];
  let fiveDay = data.list.filter((x) => x.dt_txt.includes("00:00:00"));
  return [currentData, ...fiveDay];
}

function cleanHTML(value) {
  return parseFloat(value.replace(/[a-z-A-Z]|\W+/g, ""));
}

function calculateWindchill(deg, mph, parent) {
  let windchill = "Windchill: N/A";
  if (deg <= 50 && mph > 3) {
    windchill = `Windchill ${windchillFn(deg, mph).toFixed(0)}°F`;
  }
  let p = document.createElement("p");
  p.innerHTML = windchill;
  parent.append(p);
}

function windchillFn(t, v) {
  return (
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(v, 0.16) +
    0.4275 * t * Math.pow(v, 0.16)
  );
}
