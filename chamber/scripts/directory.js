const container = document.getElementById("data");
const toggleBtns = document.querySelectorAll("#toggleBtn button");

let url = "./json/members.json";

fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const members = jsonObject;
    members.forEach((displayMember) => {
      let card = document.createElement("section");
      let h3 = document.createElement("h3");
      let address = document.createElement("p");
      let phone = document.createElement("p");
      let website = document.createElement("a");
      let image = document.createElement("img");
      let membership = document.createElement("p");

      card.classList.add("card");
      h3.innerHTML = displayMember.name;
      address.innerHTML = displayMember.address;
      phone.innerHTML = displayMember.phone;
      website.innerHTML = displayMember.website;
      website.href = displayMember.website;
      image.src = displayMember.image;
      image.alt = `${displayMember.name}`
      membership.innerHTML = `Membership: ${displayMember.membership}`;

      card.append(h3, membership, website, address, phone, image);
      container.append(card);
    });
  });

function toggleView(element) {
  for (let btn of toggleBtns) {
    btn.classList.remove("active");
  }
  if (element.id === "grid") {
    container.classList.add("list");
    container.classList.remove("grid");
  } else {
    container.classList.add("grid");
    container.classList.remove("list");
  }
  element.classList.add("active")
}
