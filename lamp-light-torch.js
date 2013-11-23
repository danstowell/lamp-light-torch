alert("hi");

var colmode = 0;
var manifestLocation = "http://danstowell.github.io/lamp-light-torch/manifest.webapp";

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

function install(){
	var installRequest = navigator.mozApps.install(manifestLocation);
	installRequest.onsuccess = function(data) {
		document.getElementById("installtext").style.color = 'inherit';
	};
	installRequest.onerror = function(err) {
		console.log("Install error! " + manifestLocation);
	};
}


/////////////////////////////////////////////
alert("onloadoo");
document.onload = function() {
	alert("onloaded");
	document.onclick = flip;
	var request = navigator.mozApps.checkInstalled(manifestLocation);
	request.onsuccess = function() {
		if (!request.result) {
			document.getElementById("installtext").onclick = install;
			document.getElementById("installtext").style.color = 'gray';
		}
	};
};

