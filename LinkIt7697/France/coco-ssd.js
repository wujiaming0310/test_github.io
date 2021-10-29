window.onload = function () {
	var ShowImage = document.getElementById('ShowImage');
	var object = document.getElementById("object");
	var score = document.getElementById("score");
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext("2d");
	var myTimer;
	var restartCount=0;
	var Model;

	cocoSsd.load().then(cocoSsd_Model => {
		Model = cocoSsd_Model;
		start();
	}); 
	
	function start() {
	  clearInterval(myTimer);  
	  myTimer = setInterval(function(){error_handle();},5000);
	  ShowImage.src = document.location.origin+'/?getstill='+Math.random();
	}

	function error_handle() {
	  restartCount++;
	  clearInterval(myTimer);
	  if (restartCount<=2) {
		myTimer = setInterval(function(){start();},10000);
	  }
	}    

	ShowImage.onload = function (event) {
	  clearInterval(myTimer);
	  restartCount=0;
	  canvas.setAttribute("width", ShowImage.width);
	  canvas.setAttribute("height", ShowImage.height);
	  context.drawImage(ShowImage,0,0,ShowImage.width,ShowImage.height);
	  if (Model) {
		DetectImage();
	  }          
	}   

	function DetectImage() {
	  Model.detect(canvas).then(Predictions => {    
		var s = (canvas.width>canvas.height)?canvas.width:canvas.height;
		if (Predictions.length>0) {
		    for (var i=0;i<Predictions.length;i++) {
				if (Predictions[i].class==object.innerHTML&&Predictions[i].score*100>=Number(score.innerHTML)) {
					const x = Predictions[i].bbox[0];
					const y = Predictions[i].bbox[1];
					const width = Predictions[i].bbox[2];
					const height = Predictions[i].bbox[3];
					context.lineWidth = Math.round(s/200);
					context.strokeStyle = "#00FFFF";
					context.beginPath();
					context.rect(x, y, width, height);
					context.stroke(); 
					context.lineWidth = "3";
					context.fillStyle = "yellow";
					context.font = Math.round(s/30) + "px Arial";
					context.fillText(Predictions[i].class, x, y);
					var result = Predictions[i].class+","+Math.round(Predictions[i].score*100)+","+Math.round(x)+","+Math.round(y)+","+Math.round(width)+","+Math.round(height);
					$.ajax({url: document.location.origin+'/?result='+result+';stop', async: false});					
				}
		    }
		}
		
		try { 
		  document.createEvent("TouchEvent");
		  setTimeout(function(){start();},250);
		}
		catch(e) { 
		  setTimeout(function(){start();},150);
		} 
	  });
	}   
}  
