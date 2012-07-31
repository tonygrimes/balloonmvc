var GAMESYS = GAMESYS || {};
GAMESYS.notifications = GAMESYS.bingo || {};

//*********GAME END NOTIFICATION**********//

GAMESYS.notifications.GameEndNotification = function (data) {
	console.log(">>>>>>GAME END NOTIFICATION");
	this.evt = document.createEvent('Event');  
	this.evt.initEvent(this.constructor.ON_GAME_END, true, true);
};
GAMESYS.notifications.GameStartNotification.ON_GAME_END = "onGameEnd";

