function checkAns(){
var ans = 0;
var i;
var totalQuestions = 3;
var a1 = document.getElementById("q1");
	for(i = 0; i< q1.length; i++) {
		if(q1[i].checked) {
			if(q1[i].value == "10") {
				ans++;
			}
		}
	}
var a2 = document.getElementById("q2");
	for(i = 0; i< q1.length; i++) {
		if(q2[i].checked) {
			if(q2[i].value == "Winter") {
				ans++;
			}
		}
	}
var a3 = document.getElementById("q3");
	for(i = 0; i< q1.length; i++) {
		if(q3[i].checked) {
			if(q3[i].value == "On the moon") {
				ans++;
			}
		}
	}
if(ans == totalQuestions) {
	document.getElementById("result").innerHTML = "You got them all right!"
}
else if (ans == 0) {
	document.getElementById("result").innerHTML = "C'mon at least try."
}
else {
	document.getElementById("result").innerHTML = "You got " + ans + " out of 3"
}

};