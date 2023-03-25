const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];
    
const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

const giveaway = document.querySelector(".giveaway")
const deadline = document.querySelector(".deadline")
const items = document.querySelectorAll(".box h4")
console.log(items)

let futureDate = new Date(2023,5,15,15,30,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes()

let month = futureDate.getMonth();
month = months[month]
const date = futureDate.getDate()

const weekday = weekdays[futureDate.getDay()]

giveaway.textContent = `Giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}pm`

