const weatherPs = document.querySelectorAll("#weatherData div p");
console.log(weatherPs);

for (let i = 0; i < weatherPs.length; i += 2) {
  let degrees = cleanHTML(weatherPs[i].innerHTML);
  let windspeed = cleanHTML(weatherPs[i + 1].innerHTML);
  calculateWindchill(degrees, windspeed, weatherPs[i].parentElement);
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
