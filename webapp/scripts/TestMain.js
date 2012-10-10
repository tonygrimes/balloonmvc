require(['NotificationCentre', "CommsManager", "ParallaxView", "BalloonView", "utils"],

	function   (NotificationCentre, CommsManager, ParallaxView, BalloonView, utils) {


		//create parent obj	
		var parentObj = {

			name : "tony",
			age : 37,
			sex : "male",
			sayHello : function(){
				return "Hi, my name is " + this.name + " and i am " + this.age;
			}			
			//return this;

		}

		//create child obj
		var childObj = utils.create(parentObj);
		childObj.name = "Leo";
		childObj.age = 3;

		parentObj.name="Bill";

		//call super function and override it
		childObj.sayHello = function(){

			var message = parentObj.sayHello();
			return message + " and i am " + this.name + " and i am a " + this.sex;
		}

		console.log(childObj.sayHello());
		
	}
);
