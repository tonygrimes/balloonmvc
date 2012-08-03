define(["Harness", "BallCallNotification", "GameStartNotification", "BallCallNotification", "GameEndNotification"], function(Harness, BallCallNotification, GameStartNotification, BallCallNotification, GameEndNotification){

	var CommsManager = function (config, notificationCentre) {
		this.harness;
		this.socket;
		this.connected = false;
		this.successCallback = config.success;
		this.failCallback = config.error;
		this.notificationCentre = notificationCentre;
		this.setupConnection();
	}
	
	CommsManager.prototype.setupConnection = function () {
		//this.setupWebsocket();
		this.setupHarness();
	};
	
	CommsManager.prototype.setupHarness = function () {
		this.harness = new Harness(this.onMessage, this.onOpen, this);
	};
	
	CommsManager.prototype.setupWebsocket = function (event) {
		if(window.WebSocket){
			
			var location = document.location.toString()
					.replace('http://', 'ws://')
					.replace('https://', 'wss://')
					+ "angryballs";
			this.socket = new WebSocket("ws://localhost:8080/angryballs/angryballs", "angryballs");
			//this.socket.addListener ('onerror', this.failCallback);
			//this.socket.addListener ('onclose', this.failCallback);
			//this.socket.addListener ('onopen', this.onOpen);
			//this.socket.addListener ('onmessage', this.onMessage);
			var me=this;
			this.socket.onopen = function(){me.onOpen()};
			this.socket.onmessage = function(m){me.onMessage(m)};
			this.socket.onclose = function(){me.onFail()};
			this.socket.onerror = function(){me.onError()};
		}else{
			console.log("Websockets not supported in this browser");
		}
	};
	
	CommsManager.prototype.onFail = function () {
		this.failCallback();
	};
	
	CommsManager.prototype.onOpen = function () {
		this.connected = true;
		this.successCallback();
	};
	
	CommsManager.prototype.onMessage = function (m) {
		
		switch(m.type){
			case "message":
				var ballNumber = m.data.replace(/[a-z\[\]-]/gi, "");
				var message = {ballNo : ballNumber};
				this.notificationCentre.sendNotification(new BallCallNotification(message));
				break;
			case "ongamestart":
				this.notificationCentre.sendNotification(new GameStartNotification(m));
				break;
			case "onballcall":
				this.notificationCentre.sendNotification(new BallCallNotification(m));
				break;
			case "ongameend":
				this.notificationCentre.sendNotification(new GameEndNotification(m));
				break;
		}
		
	};

	return CommsManager;

});

