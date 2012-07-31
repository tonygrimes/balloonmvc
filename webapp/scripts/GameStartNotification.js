var GAMESYS = GAMESYS || {};
GAMESYS.notifications = GAMESYS.bingo || {};

//*********GAME START NOTIFICATION**********//

GAMESYS.notifications.GameStartNotification = function (data) {
	console.log(">>>>>GAME START NOTIFICATION");
	this.evt = document.createEvent('Event');  
	this.evt.initEvent(this.constructor.ON_GAME_START, true, true);
};
GAMESYS.notifications.GameStartNotification.ON_GAME_START = "onGameStart";