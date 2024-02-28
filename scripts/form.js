const passwordEl = document.getElementById("pwd")
const confirmEl = document.getElementById("confirm")
const warn = document.querySelector(".warn")
const rangeEl = document.getElementById("rating")
const rangeOutEl = document.getElementById("ratingOut")

confirmEl.addEventListener("focusout", () => {
    if(passwordEl.value != confirmEl.value){
        passwordEl.value = ""
        confirmEl.value = ""
        warn.style.display = "block"
        passwordEl.focus()
    }
})

rangeEl.addEventListener("change", _=> {
    rangeOutEl.innerHTML = `Page Rating: ${rangeEl.value}`
})