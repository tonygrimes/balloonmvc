define(function(){

		var GameEndNotification = function (data) {
			console.log(">>>>>>GAME END NOTIFICATION");
			this.evt = document.createEvent('Event');  
			this.evt.initEvent(this.constructor.ON_GAME_END, true, true);
		};
		GameEndNotification.ON_GAME_END = "onGameEnd";

		return GameEndNotification;

});

