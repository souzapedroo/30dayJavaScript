const hors = document.querySelector("#hors");
const mins = document.querySelector("#mins");
const secus = document.querySelector("#secus");
const hour = document.querySelector(".hour");
const min = document.querySelector(".min");
const sec = document.querySelector(".sec");


function setDate(){

    //Pega hora atual No Dispositivo utlizidado.
    const now = new Date();

    let horus = now.getHours();
    const horusDegres = ((horus / 60) * 360);
    hour.style.transform = `rotateZ(${horusDegres}deg)`; // Rotação do ponteiro de Horas
    horus = horus % 12 || 12; //Formatação para 12 horas

    const minutes = now.getMinutes();
    const minDegrees = ((minutes / 60) * 360);
    min.style.transform = `rotateZ(${minDegrees}deg)`; // Rotação do ponteiro de Minutos

    
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360);
    sec.style.transform = `rotateZ(${secondsDegrees}deg)`;  // Rotação do ponteiro de Secundos

    hors.textContent = formatTimer(horus);
    mins.textContent = formatTimer(minutes);
    secus.textContent = formatTimer(seconds);
}

setInterval(setDate, 1000);

function formatTimer(time){
    return time < 10 ? `0${time}` : time;
}

const switchTheme = (evt) => {
	const switchBtn = evt.target;
	if (switchBtn.textContent.toLowerCase() === "light") {
		switchBtn.textContent = "dark";
		// localStorage.setItem("theme", "dark");
		document.documentElement.setAttribute("data-theme", "dark");
	} else {
		switchBtn.textContent = "light";
		// localStorage.setItem("theme", "light"); //add this
		document.documentElement.setAttribute("data-theme", "light");
	}
};

const switchModeBtn = document.querySelector(".switch-btn");
switchModeBtn.addEventListener("click", switchTheme, false);

let currentTheme = "dark";
// currentTheme = localStorage.getItem("theme")
// 	? localStorage.getItem("theme")
// 	: null;

if (currentTheme) {
	document.documentElement.setAttribute("data-theme", currentTheme);
	switchModeBtn.textContent = currentTheme;
}

