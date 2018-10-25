var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.querySelector("button");

//Sets the color of colorinputs to CSS properties
color1.value = "#FF0000";
color2.value = "#FFFF00";

//Sets background gradience to input choices
function backgroundColor() {
	body.style.background = "linear-gradient(to right, " + color1.value
	+ ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

//Displays the default values as a text
body.onload = function() {
	backgroundColor();
}

//Calls the backgroundColor function when inputs are selected
function backgroundColorChange() {
	backgroundColor();
}

//Randomizes two colors
function randomColor() {
	var randomColor1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    var randomColor2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = "linear-gradient(to right, " + randomColor1 + ", " + randomColor2 + ")";
	
	color1.value = randomColor1;
	color2.value = randomColor2;

	css.textContent = body.style.background + ";";
}


//Eventlisteners
color1.addEventListener("input", backgroundColorChange);

color2.addEventListener("input", backgroundColorChange);

randomBtn.addEventListener("click", randomColor);