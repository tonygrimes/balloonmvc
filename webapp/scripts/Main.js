require(['NotificationCentre', "CommsManager", "ParallaxView", "BalloonView", "utils"],

	function   (NotificationCentre, CommsManager, ParallaxView, BalloonView, utils) {

		var notificationCentre = utils.create(NotificationCentre);
		
		var createViewStack = function(){
			var backgroundView = new ParallaxView("back1", "back2", notificationCentre);
			var balloonView = new BalloonView("balloonContainer", notificationCentre);
			createViewStack = function(){}; // run once
		};

		var commsManager = new CommsManager({
			success: function () { createViewStack (); },
			error: function () { console.log ('error'); }
		}, notificationCentre);		


	}
);
