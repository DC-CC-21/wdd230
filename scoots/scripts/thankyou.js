String.prototype.toTitleCase = function () {
  let words = this.toLowerCase().split(" ");
  let ttlWords = words.map(
    (word) => word[0].toUpperCase() + word.slice(1, word.length)
  );
  return ttlWords.join(" ");
};

const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get("page") === "reservations") {
  document.querySelector("#thanks h2").innerHTML =
    "Thank you for your reservation";
  showReservationInfo();
}

function showReservationInfo() {
  let reservationInfoEl = document.getElementById("reservationInfo");
  let h3 = document.createElement("h3");
  h3.innerHTML = "Reservation Details";
  reservationInfoEl.append(h3);

  urlParams.delete("page", "reservations")
  urlParams.forEach((key, value) => {
    value = value.replace("fname", "First Name");
    value = value.replace("lname", "Last Name");
    value = value.replace("addcomments", "Comments Name");

    let p = document.createElement("p");
    p.innerHTML = `${value.toTitleCase()}: ${key || "N/A"}`;
    reservationInfoEl.append(p);
  });
}
