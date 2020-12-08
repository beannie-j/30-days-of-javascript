const deg = 6;
const LONDON_HOUR = document.querySelector("#london-hr");
const LONDON_MINUTES = document.querySelector('#london-mn');
const LONDON_SECONDS = document.querySelector('#london-sc');

const NEWYORK_HOUR = document.querySelector("#newYork-hr");
const NEWYORK_MINUTES = document.querySelector('#newYork-mn');
const NEWYORK_SECONDS = document.querySelector('#newYork-sc');

const TOKYO_HOUR = document.querySelector("#tokyo-hr");
const TOKYO_MINUTES = document.querySelector('#tokyo-mn');
const TOKYO_SECONDS = document.querySelector('#tokyo-sc');

setInterval(() => {
    getTime();  
});

function getTime()
{
    let londonTime = new Date();

    let londonHour = londonTime.getHours();
    let londonMin = londonTime.getMinutes();
    let londonSeconds = londonTime.getSeconds();

    let londonHourDegree = londonHour * 30;
    let londonMinDegree = londonMin * deg;
    let londonSecondsDegree = londonSeconds * deg;

    LONDON_HOUR.style.transform = `rotateZ(${(londonHourDegree)+(londonMinDegree/12)}deg)`;
    LONDON_MINUTES.style.transform = `rotateZ(${londonMinDegree}deg)`; 
    LONDON_SECONDS.style.transform = `rotateZ(${londonSecondsDegree}deg)`; 

    let newYorkHour = londonTime.getHours() + 5;
    let newYorkMin = londonTime.getMinutes();
    let newYorkSeconds = londonTime.getSeconds();

    let newYorkHourDegree = newYorkHour * 30;
    let newYorkMinDegree = newYorkMin * deg;
    let newYorkSecondsDegree = newYorkSeconds * deg;

    NEWYORK_HOUR.style.transform = `rotateZ(${(newYorkHourDegree)+(newYorkMinDegree/12)}deg)`;
    NEWYORK_MINUTES.style.transform = `rotateZ(${newYorkMinDegree}deg)`; 
    NEWYORK_SECONDS.style.transform = `rotateZ(${newYorkSecondsDegree}deg)`; 

    let tokyoHour = londonTime.getHours() + 9;
    let tokyoMin = londonTime.getMinutes();
    let tokyoSeconds = londonTime.getSeconds();

    let tokyoHourDegree = tokyoHour * 30;
    let tokyoMinDegree = tokyoMin * deg;
    let tokyoSecondsDegree = tokyoSeconds * deg;

    TOKYO_HOUR.style.transform = `rotateZ(${(tokyoHourDegree)+(tokyoMinDegree/12)}deg)`;
    TOKYO_MINUTES.style.transform = `rotateZ(${tokyoMinDegree}deg)`; 
    TOKYO_SECONDS.style.transform = `rotateZ(${tokyoSecondsDegree}deg)`; 
}


