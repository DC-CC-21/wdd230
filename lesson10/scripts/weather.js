const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const main = document.querySelector("main");

const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=f2e36b633016e8e4455cd9e98b32a633";

async function apiFetch() {
  try {
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

function displayResults(data) {
  currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

  data.weather.forEach((result) => {
    let figure = document.createElement("figure");
    let img = document.createElement("img");
    let figcaption = document.createElement("figcaption");

    img.src = `https://openweathermap.org/img/w/${result.icon}.png`;
    img.setAttribute("alt", result.description);
    figcaption.innerHTML = result.description.toTitleCase();

    figure.append(img, figcaption);
    main.append(figure);
  });
}

String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

apiFetch();
