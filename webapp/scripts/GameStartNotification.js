define(function(){

		var GameStartNotification = function (data) {
			console.log(">>>>>GAME START NOTIFICATION");
			this.evt = document.createEvent('Event');  
			this.evt.initEvent(this.constructor.ON_GAME_START, true, true);
		};
		GameStartNotification.ON_GAME_START = "onGameStart";

		return GameStartNotification;

});	
