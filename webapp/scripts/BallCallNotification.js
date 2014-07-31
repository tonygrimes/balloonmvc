define(function(){

	var BallCallNotification = function (data) {
		this.evt = document.createEvent('Event');  
		this.evt.ballCall = data.ballNo;
		this.evt.initEvent(this.constructor.ON_BALL_CALL, true, true);
	};
	BallCallNotification.ON_BALL_CALL = "onBallCall";
	
	return BallCallNotification;

});

