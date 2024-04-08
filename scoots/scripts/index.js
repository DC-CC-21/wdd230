// > SLIDESHOW
let current = 0;
let images = document.querySelectorAll("#heroImages img");

function slideshow() {
  images[current].classList.add("off");
  current++;
  if (current >= images.length) {
    current = 0;
  }
  images[current].classList.remove("off");

  setTimeout(slideshow, 5000);
}

slideshow();

document.querySelector(".banner button").addEventListener("click", (_) => {
  document.querySelector(".banner").style.display = "none";
});
