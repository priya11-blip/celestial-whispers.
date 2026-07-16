// ============================
// LIVE DATE & TIME
// ============================

function updateDateTime() {
    const now = new Date();

    const dateOptions = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    document.getElementById("date").innerHTML =
        now.toLocaleDateString("en-US", dateOptions);

    document.getElementById("clock").innerHTML =
        now.toLocaleTimeString("en-US");
}

setInterval(updateDateTime, 1000);
updateDateTime();

// ============================
// QUOTES OF THE DAY
// ============================

const quotes = [

"Believe in your own magic. ✨",

"Small steps every day create beautiful journeys. 🌸",

"The moon still shines, even on cloudy nights. 🌙",

"You are growing beautifully, even when you can't see it. 💜",

"Every day is a fresh page waiting to be written. 📖",

"Your dreams deserve your courage. ⭐",

"Happiness blooms from gratitude. 🌷",

"Be gentle with yourself today. 🤍",

"You carry a universe within you. 🌌",

"Collect moments, not worries. ☁️"

];

function randomQuote(){

const random=Math.floor(Math.random()*quotes.length);

document.getElementById("quote").innerHTML=quotes[random];

}

randomQuote();

// ============================
// SAVE MOOD
// ============================

const mood=document.getElementById("mood");

if(localStorage.getItem("todayMood")){

mood.value=localStorage.getItem("todayMood");

}

mood.addEventListener("change",function(){

localStorage.setItem("todayMood",mood.value);

});

// ============================
// WEATHER
// ============================

// Replace YOUR_API_KEY with your OpenWeatherMap API key
const apiKey = "YOUR_API_KEY";

// Example city
const city = "Delhi";

async function getWeather(){

if(apiKey==="YOUR_API_KEY"){

document.getElementById("weather").innerHTML=
"🌤 Add your OpenWeatherMap API Key";

return;

}

try{

const response=await fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
);

const data=await response.json();

document.getElementById("weather").innerHTML=`
🌡 ${data.main.temp}°C <br>
☁ ${data.weather[0].main}<br>
💧 ${data.main.humidity}%`;

}

catch{

document.getElementById("weather").innerHTML=
"Weather unavailable";

}

}

getWeather();

// ============================
// GREETING
// ============================

const hour=new Date().getHours();

let greeting="Welcome Back 🌙";

if(hour<12){

greeting="Good Morning ☀️";

}

else if(hour<18){

greeting="Good Afternoon 🌸";

}

else{

greeting="Good Evening 🌙";

}

document.querySelector(".hero h2").innerHTML=greeting;

// ============================
// BUTTON RIPPLE EFFECT
// ============================

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.05)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});

});
