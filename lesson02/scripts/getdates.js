let footerP = document.querySelectorAll("footer p")
let currentDate = new Date()

footerP[0].innerHTML = footerP[0].innerHTML.replace("2024", currentDate.getFullYear())
footerP[1].innerHTML = document.lastModified