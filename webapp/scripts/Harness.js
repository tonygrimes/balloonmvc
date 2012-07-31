define(function(){
	
	var Harness = function (msgCallback, openCallback, owner) {
	
		var me = this;
		this.callback = msgCallback;
		this.owner = owner;
		this.BALL_CALL_SPEED = 1000;
		
		var message = {type:"onopen"};	
		openCallback.call(this.owner, message);
		
		this.startGame();
		setInterval(function(){me.startGame();}, 1000*30); // start a new game every 2.5 minutes 
	};
	
	Harness.prototype.startGame = function () {
		var message = {type:"ongamestart"};
		this.callback.call(this.owner, message);
		var me = this;
		this.balls = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
		this.counter = this.balls.length;
		this.ballCallInterval = setInterval(function(){me.sendBallCall();}, this.BALL_CALL_SPEED); //send a new ball call every 5 seconds		
	};
	
	Harness.prototype.sendBallCall = function () {
		var ballNo = Math.floor(Math.random()*this.counter);
		var message = {type:"onballcall", ballNo:this.balls[ballNo]};
		this.callback.call(this.owner, message);
		this.balls.splice(ballNo, 1);
		this.counter--;
		
		if(this.counter < 1){
			clearInterval(this.ballCallInterval);
			var message = {type:"ongameend"};	
			this.callback.call(this.owner, message);
		}
	};
	
	return Harness;
	
});

