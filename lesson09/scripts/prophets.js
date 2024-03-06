const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json'
const cards = document.querySelector("#cards")

async function getProphetData(){
    const response = await fetch(url)
    const data = await response.json()
    console.table(data)

    displayProphets(data.prophets)
}
getProphetData()

const displayProphets = (prophets) => {
    prophets.forEach(prophet => {
        let section = document.createElement("section")
        let fullName = document.createElement("h2")
        let date = document.createElement("p")
        let place = document.createElement("p")
        let portrait = document.createElement("img")

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`

        date.innerHTML = `Date of Birth: ${prophet.birthdate}`
        place.innerHTML = `Place of birth: ${prophet.birthplace}`

        portrait.src = prophet.imageurl
        portrait.alt = `Portrait of ${prophet.name} ${prophet.lastName}`
        portrait.loading = "lazy"
        portrait.setAttribute("width", "340")
        portrait.setAttribute("height", "440")

        section.appendChild(fullName)
        section.append(date, place)        
        section.appendChild(portrait)
        cards.appendChild(section)
    })
}

