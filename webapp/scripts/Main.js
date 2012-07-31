require(['NotificationCentre', "CommsManager"],

		function   (NotificationCentre, CommsManager) {
    				    				
    				var notificationCentre = new NotificationCentre();
	    			
					var createViewStack = function(){
						//var backgroundView = new ParallaxView("back1", "back2", notificationCentre);
						//var balloonView = new BalloonView("balloonContainer", notificationCentre);
						print("CREATE VIEW ATTACK");
						createViewStack = function(){}; // run once
					};

					var commsManager = new CommsManager({
						success: function () { createViewStack (); },
						error: function () { console.log ('error'); }
					}, notificationCentre);
					
					
		}
);
