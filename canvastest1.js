var canvas = null;
var context = null;
	
function resizeCanvas(){
	var THRESHOLD = 20;
		
	canvas.width = window.innerWidth - THRESHOLD;
	canvas.height = window.innerHeight - THRESHOLD;
}
	
function setupCanvas(){	
	canvas = document.getElementById("canvas");
	context = canvas.getContext('2d');
		
	resizeCanvas();
		
	$(window).resize(function(){
		resizeCanvas();
	});
}
	
function loadImage(source){
	var image = new Image();
	image.src = source;
	image.onload = onImageLoad;
		
	return image;
}
	
function loadRoboWalk(){
	var assets = [
	'robowalk/robowalk00.png',
	'robowalk/robowalk01.png',
	'robowalk/robowalk02.png',
	'robowalk/robowalk03.png',
	'robowalk/robowalk04.png',
	'robowalk/robowalk05.png',
	'robowalk/robowalk06.png',
	'robowalk/robowalk07.png',
	'robowalk/robowalk08.png',
	'robowalk/robowalk09.png',
	'robowalk/robowalk10.png',		
	'robowalk/robowalk11.png',		
	'robowalk/robowalk12.png',		
	'robowalk/robowalk13.png',		
	'robowalk/robowalk14.png',		
	'robowalk/robowalk15.png',		
	'robowalk/robowalk16.png',		
	'robowalk/robowalk17.png',		
	'robowalk/robowalk18.png'
	]
		
	var frames = []
	for (var i = 0; i < assets.length; i++){
		frames[i] = new Image();
		frames[i].src = assets[i];
		frames[i].onload = onImageLoad;
	}
		
	return frames;
}
	
var actualFrame = 0;
	
function animate(){
	context.clearRect(0,0,canvas.width, canvas.height);
		
	context.drawImage(frames[actualFrame], 0, 0);
			
	actualFrame++;
	if(actualFrame >= frames.length){
		actualFrame = 0;
	}
}
	
function onImageLoad(){
	// var imgRatio = this.width/this.height;
	context.drawImage(this, 0, 0);
}

$(document).ready(function(){
	setupCanvas();
	frames = loadRoboWalk();
		
	setInterval(animate, 1000/30);
});