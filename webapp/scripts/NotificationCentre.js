define(function(){

		var notificationCentre =  {
			
			sendNotification: null,
			addNotificationListener: null

		}

		notificationCentre.sendNotification = function (notification) {
			document.dispatchEvent(notification.evt);
		};

		notificationCentre.addNotificationListener = function (type, listener, owner) {
			document.addEventListener(type, function(evt){ 
				listener.call(owner, evt); 
			});
		};
/*
		if(typeof window.addEventListener === function){ //webkit and mozilla

			notificationCentre.sendNotification = function (notification) {
				document.dispatchEvent(notification.evt);
			};

			notificationCentre.addNotificationListener = function (type, listener, owner) {
				document.addEventListener(type, function(evt){ 
												listener.call(owner, evt); 
											});
			};

		}else if(typeof document.attachEvent === function){ //IE		

			notificationCentre.sendNotification = function (notification) {
				document.dispatchEvent(notification.evt);
			};

			notificationCentre.addNotificationListener = function (type, listener, owner) {
				document.addEventListener(type, function(evt){ 
												listener.call(owner, evt); 
											});
			};

		};
*/
		return notificationCentre;
		
});