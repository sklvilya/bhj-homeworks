let timer;
let a = 59;
countdown();
function countdown(){
	document.getElementById("timer").innerHTML = "00" + ":" + "00" + ":" + a;
	a--;
	if (a < 0) {
		clearTimeout(timer);
		alert('Вы победили в конкурсе!');
	}
	else {
		timer = setTimeout(countdown, 1000);
	}
};