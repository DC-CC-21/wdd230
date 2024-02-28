let hamButton = document.querySelector(".ham");
let nav = document.getElementById("menu");

hamButton.addEventListener("click", (e) => {
  hamButton.classList.toggle("open");
  nav.classList.toggle("open");
});


const numVisitsEl = document.getElementById("numVisits")
if(numVisitsEl){
  let visits = localStorage.getItem("pageVisits") || 0
  visits = parseInt(visits);
  if(visits === 0){
    numVisitsEl.innerHTML = `Welcome, This it your first visit.`;
  } else {
    numVisitsEl.innerHTML = `Number of Visits: ${visits}`;
  }
  visits += 1
  localStorage.setItem("pageVisits", visits);
}
