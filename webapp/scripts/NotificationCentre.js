define(function(){

		var NotificationCentre = function () {};
		
		NotificationCentre.prototype.test = function (param) {
			console.log(param);
		};
		
		NotificationCentre.prototype.sendNotification = function (notification) {
			document.dispatchEvent(notification.evt);
		};
		
		NotificationCentre.prototype.addNotificationListener = function (type, listener, owner) {
			
			document.addEventListener(type, function(evt){ 
												listener.call(owner, evt); 
											});
		};
		
		return NotificationCentre;
		
});