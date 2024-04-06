document.querySelector(".copyright").textContent = `\u00A9${new Date().getFullYear()} DC-CC-21`
document.querySelector(".lastMod").innerHTML = `Last Modified: ${document.lastModified}`
document.querySelector(".location").innerHTML = "Calle 2 Nte 3, Centro, 77600 Cozumel, Q.R., Mexico"
document.querySelector(".location2").innerHTML = "Km 4.5, Av. Rafael E. Melgar, 77675 Cozumel, Q.R., Mexico"


document.querySelector("nav button").addEventListener("click", _ => {
    document.querySelector("nav div").classList.toggle("open")
    document.querySelector("nav button").classList.toggle("open")
})