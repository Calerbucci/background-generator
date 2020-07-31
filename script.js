var color1 = document.getElementById("color1");
var color2 = document.getElementById("color2");
var css = document.getElementById("change");
var bg = document.querySelector(".bg");
var random = document.getElementById("random");

function changeWithRandom(hexValue, hexValue2){
	bg.style.background =  "linear-gradient(to right," + hexValue + ", " + hexValue2 + ")";
	css.textContent = bg.style.background;
}

function rgbToHex(r,g,b){
	return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);

}

function randomNumber(){
	
 	var r = Math.floor((Math.random() * 255) + 0);
 	var g = Math.floor((Math.random() * 255) + 0);
 	var b = Math.floor((Math.random() * 255) + 0);

 	var a = Math.floor((Math.random() * 255) + 0);
 	var b = Math.floor((Math.random() * 255) + 0);
 	var c = Math.floor((Math.random() * 255) + 0);


	//console.log(r,g,b);
	    
	var hexValue = rgbToHex(r,g,b);
	var hexValue2 = rgbToHex(a,b,c);

	//console.log(hexValue);
    changeWithRandom(hexValue, hexValue2);

	

}

function changeGradient(){
	bg.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
	//console.log(color1.value);
	css.textContent = bg.style.background;
}


random.addEventListener("click", randomNumber);
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);