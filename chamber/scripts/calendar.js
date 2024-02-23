const calendarEl = document.getElementById("calendar");
const eventEl = document.getElementById("event")
const current_date = new Date();
const first_day = new Date(current_date.getFullYear(), current_date.getMonth());
let eventData;

const days = [
    "Sun",
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat"
]
const months = [
    {
        name: 'January', 
        days: 31
    },
    {
        name: 'February', 
        days: get_feb_days()
    },
    {
        name: 'March', 
        days: 31
    },
    {
        name: 'April', 
        days: 31
    },
    {
        name: 'May', 
        days: 31
    },
    {
        name: 'June', 
        days: 31
    },
    {
        name: 'July', 
        days: 31
    },
    {
        name: 'August', 
        days: 31
    },
    {
        name: 'September', 
        days: 31
    },
    {
        name: 'October', 
        days: 31
    },
    {
        name: 'November', 
        days: 31
    },
    {
        name: 'December', 
        days: 31
    },
]

createCalendar()


async function createCalendar(){
    //wait for data to be fetched
    eventData = await fetchData();

    //continue with calendar creation
    daysOfWeek()
    for(let i = 0; i < first_day.getDay(); i ++){
        addBox("", "spacer");
    }

    // add days
    for(let i = 1; i <= months[first_day.getMonth()].days; i ++){
        if(i === current_date.getDate()){
            addBox(i, "current");
        } else {
            addBox(i, "day")
        }
         
    }

    showEvent(current_date.getDate())
}
async function fetchData(){
    let res = await fetch("./json/events.json")
    let data = await res.json()
    return data
}
function showEvent(date){
    Array.from(eventEl.children).forEach(child => {
        child.remove()
    })
    let h3 = document.createElement("h3")
    eventEl.append(h3)

    let d = new Date(current_date.getFullYear(), current_date.getMonth(), date)
    let day = days[d.getDay()]
    let month = d.toLocaleString("default", {month:"long"})
    h3.innerHTML = `Showing events for ${day} ${month} ${d.getDate()}`
    

    let events = eventData[month][d.getDate()]
    if(events){
        events.forEach(e => {
            let div = document.createElement("div")
            let h4 = document.createElement("h4")
            let p = document.createElement("p")

            h4.innerHTML = e.title
            p.innerHTML = e.description

            div.append(h4, p)
            eventEl.append(div)
        })
    } else {
        let p = document.createElement("p")
        p.innerHTML = "No events for today. Check back soon."
        eventEl.append(p)
    }
}

function daysOfWeek(){
    // add days of the week
    days.forEach(day => {
        addBox(day, "header")
    })
}
function addBox(txt, classes=""){
    let span = document.createElement("span")
    span.classList.add("box")
    span.innerHTML = txt
    if(classes !== ""){
        span.classList.add(classes)
    }
    calendarEl.append(span)
}
function get_feb_days(){
    let year = new Date().getFullYear()
    if(year%4===0){
        return 29;
    } else {
        return 28;
    }
}
calendarEl.addEventListener("click", (e) => {
    let targetClassList = e.target.classList.value
    if(targetClassList.includes("day") || targetClassList.includes("current")){
        for(child of calendarEl.children){
            if(child != e.target){
                child.classList.remove("picked")
            }
        }
        e.target.classList.toggle("picked")
        showEvent(e.target.innerHTML)
    }
})