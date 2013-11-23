var colmode = 0;

function flip(){
	colmode = 1 - colmode;
	if(colmode==0){
		thecolor = 'white';
	}else{
		thecolor = 'red';
	}
	document.body.style.background = thecolor;
	document.body.style.color = thecolor;
}



/////////////////////////////////////////////
window.onload = function(e) {
	document.onclick = flip;
};

