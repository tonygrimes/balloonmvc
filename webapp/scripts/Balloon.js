define(function(){

		var Balloon = function(balloonSrc)
		{	
			var textDiv;
			this.intervalId;
			this.posY;
			this.posX;
			this.velY;
			this.balloonWidth = 100;
			this.balloonHeight = 167;
			this.gravity = -0.02;
			this.enabled = false;

			this.displayObject = document.createElement('div');
			this.displayObject.style.fontSize = '40px';
			this.displayObject.style.fontFamily = 'Arial,Helvetica,sans-serif';
			this.displayObject.style.textAlign = 'center';
			this.displayObject.style.color = 'white';
			this.displayObject.style.background = 'url('+balloonSrc+') transparent'; 
			this.displayObject.style.position = 'absolute';
			this.displayObject.style.display = 'block'; 
			this.displayObject.style.width = this.balloonWidth+"px"; 
			this.displayObject.style.height = this.balloonHeight+"px";
			this.displayObject.style.visibility = 'hidden';
			this.displayObject.style.webkitTransformOrigin = (this.balloonWidth/2)+"px "+(this.balloonHeight/2)+"px";
		}

		Balloon.prototype.isAboveScreen = function() {
			return (this.posY < -200);
		};

		Balloon.prototype.activate = function(ballNo, x, y) {
			var me = this;
			this.velY = -((Math.random()*0.1) + 0.1);
			this.displayObject.innerHTML = ballNo;
			this.posX = x; 
			this.posY = y; 
			this.enabled = true;
			this.displayObject.style.visibility = "visible";
			this.intervalId = setInterval(function(){me.update();}, 15); 
		};

		Balloon.prototype.deactivate = function() {
			clearInterval(this.intervalId);
			this.enabled = false;
			this.displayObject.style.visibility = 'hidden';
		};

		Balloon.prototype.update = function() {
			if(this.enabled){
				this.velY += this.gravity; 
				this.posY += this.velY; 
				this.render();
			}
			if(this.isAboveScreen()){
				this.deactivate();
			}
		};
			
		Balloon.prototype.render = function() {
			this.displayObject.style.webkitTransform = "translate3d("+this.posX+"px, "+this.posY+"px, 0px)"; 
		};

		return Balloon;

})