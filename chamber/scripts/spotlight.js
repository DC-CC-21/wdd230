let businessSpotlights = document.querySelector(".businessSpotlights");
fetch("./json/members.json")
  .then((response) => response.json())
  .then((data) => {
    let spotlightMembers = data.filter(member => member.membership == "Silver" || member.membership == "Gold");

    let iterations = spotlightMembers.length < 3 ? spotlightMembers : 3;
    while(iterations){
        let idx = ~~(Math.random() * spotlightMembers.length);
        createCard(spotlightMembers.splice(idx,1)[0]);

        iterations --;
    }
  });

function createCard(member){
    let h3 = document.createElement("h3");
    let a = document.createElement("a");
    a.setAttribute("rel", "noopener")
    a.setAttribute("target", "_blank");
    a.href = member.website;
    a.innerHTML = member.name;

    h3.append(a);

    let div = document.createElement("div");
    div.classList.add("card")
    div.classList.add("spotlight");

    let p = document.createElement("p");
    p.innerHTML = member.phone;

    let img = document.createElement("img");
    img.src = member.image;
    img.alt = `${member.name} Logo`;
    img.setAttribute("width","256");
    img.setAttribute("height","169");

    div.append(h3, p, img);
    businessSpotlights.append(div);
}
