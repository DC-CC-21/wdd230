const weatherEl = document.getElementById("weather");
const url =
  "https://api.openweathermap.org/data/2.5/weather?lat=42.07&lon=-71.71&units=imperial&appid=f2e36b633016e8e4455cd9e98b32a633";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let img = document.createElement("img");
    let p = document.createElement("p")

    img.src = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    p.innerHTML = `${Math.round(data.main.temp)}&deg;F - ${data.weather[0].description.toTitleCase()}`;
    
    weatherEl.innerHTML = ''

    weatherEl.append(img, p)
})


String.prototype.toTitleCase = function () {
    let words = this.toLowerCase().split(" ");
    let ttlWords = words.map(
      (word) => word[0].toUpperCase() + word.slice(1, word.length)
    );
    return ttlWords.join(" ");
  };