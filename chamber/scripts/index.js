// Nav ham button
const nav = document.querySelector("nav");
function showNav(e) {
  e.children[0].classList.toggle("on");
  nav.classList.toggle("open");
}

let footerP = document.querySelectorAll("footer div:not(#about)>p");
let currentDate = new Date();

footerP[0].innerHTML = footerP[0].innerHTML.replace(
  "year",
  currentDate.getFullYear()
);
footerP[
  footerP.length - 1
].innerHTML = `Last Modified: ${document.lastModified}`;

const r = document.querySelector(":root");
let values = [
  "--%header",
  "--%nav",
  "--%nav-wayfind",
  "--%accent",
  "--%background",
  "--%background2",
  "--%body",
  "--%altTxt",
  "--%weatherBg"
];
function switchMode(e) {
  e.classList.toggle("on");
  let rs = getComputedStyle(r);
  values.forEach((value) => {
    let v = value;
    if (e.classList.value.includes("on")) {
      v = v.replace("%", "d");
    } else {
      v = v.replace("%", "l");
    }
    r.style.setProperty(value.replace("%", ""), rs.getPropertyValue(v));
  });
}
