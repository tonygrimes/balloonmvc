requirejs([], function() {
    				
	ParallaxView = function(backLayerId, frontLayerId, notificationCentre)
	{
		this.notificationCentre = notificationCentre;
	
		var counter		=	0,
			frontLayer 	= 	document.getElementById(frontLayerId),
			backLayer 	= 	document.getElementById(backLayerId);
		
		backLayer.style.webkitTransformOrigin  = "0px 0px"; 
		frontLayer.style.webkitTransformOrigin  = "0px 0px"; 
		
		this.update = function(){
			counter++;
			backLayer.style.webkitTransform  = "translate3d(0px, "+(-768 +((counter*1)%768))+"px, 0px) scale(4)"; 
			frontLayer.style.webkitTransform  = "translate3d(0px, "+(-768 +((counter*3)%768))+"px, 0px) scale(4)"; 
		};	
		
		setInterval(this.update, 15);		
		
	}
					
});