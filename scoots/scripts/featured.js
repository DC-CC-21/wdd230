let featured = document.getElementById("featured")
fetch("./data/data.json")
  .then((res) => res.json())
  .then((jsObj) => {

    Object.keys(jsObj).forEach(key => {
        vehicleSection(key, jsObj[key])
    })

    setColumns()
});

function setColumns(){
    let featuredImages = document.querySelectorAll(".featuredImages");
    for(let i of featuredImages){
        i.style.gridTemplateColumns = "1fr 1fr 1fr"
    }
}


function vehicleSection(key, data){
    let div = document.createElement("div");
    let h3 = document.createElement("h3");
    let p = document.createElement("p");

    h3.innerHTML = key.toTitleCase()
    p.innerHTML = data.description;
    let vCard = vehicleCard(data.data);

    div.append(h3, p, vCard)
    featured.append(div)
}
function vehicleCard(data){
    let ul = document.createElement("ul")
    ul.classList.add("featuredImages")
    data.forEach((vehicle, idx) => {
        let li = document.createElement("li")
        let img = document.createElement("img")
        let p = document.createElement("p")
        img.src = vehicle.image;
        img.alt = vehicle.type.split(" ").slice(0, 2).join(" ");
        // img.setAttribute("alt", vehicle.type)
        img.setAttribute("width", "150");
        img.setAttribute("height", "100");
        img.setAttribute("loading", "lazy");
        p.innerHTML = vehicle.type
        li.append(img, p)
        ul.append(li)
    })
    return ul
}

