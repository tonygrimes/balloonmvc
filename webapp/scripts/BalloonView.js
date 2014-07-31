define(["BallCallNotification", "Balloon"], function(BallCallNotification, Balloon){

	var BalloonView = function(displayObjectid, notificationCentre)
	{				
		var me = this;
		
		this.balloonPool = [];
		this.activeBalloons = [];
		this.balloonSrc = "img/redBalloon.png";
		
		this.container = document.getElementById(displayObjectid);
		this.y = parseInt(this.container.clientHeight) + 200;
		this.notificationCentre = notificationCentre;
		this.notificationCentre.addNotificationListener(BallCallNotification.ON_BALL_CALL, this.addBalloon, this);
	}

	BalloonView.prototype.addBalloon = function(notification){

		var newBalloon, i, x, len;
		
		len = this.activeBalloons.length-1;
		x = Math.random()*parseInt(this.container.clientWidth);
		
		for(i = len; i >= 0; i--){
			var thisBalloon = this.activeBalloons[i];
			if(thisBalloon.enabled == false){
				var removedBalloon = this.activeBalloons.pop();
				this.balloonPool.push(removedBalloon);
			}
		}	
		
		if(this.balloonPool.length>0){
			newBalloon = this.balloonPool.shift();
		}else{
			newBalloon = new Balloon(this.balloonSrc); //creates a div with an background image
			this.container.appendChild(newBalloon.displayObject);
		}
		this.activeBalloons.push(newBalloon); 	
		
		newBalloon.activate(notification.ballCall, x, this.y);
	};

	return BalloonView;

})