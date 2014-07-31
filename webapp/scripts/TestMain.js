require(['libs/NotificationCentre', "CommsManager", "ParallaxView", "BalloonView", "utils"],

	function   (NotificationCentre, CommsManager, ParallaxView, BalloonView, utils) {

		//******* PARENT class

		console.log(NotificationCentre)

		function Parent (name) {
			this.myname = "my name is "+name;	
		}

		Parent.prototype.sayHello = function(){
			return this.myname;
		}

		// Parent.prototype = {

		// 	constructor : Parent, //this needed because sayHello's constructor is an Object NOT Parent
		// 	sayHello : function(){
		// 		//debugger;
		// 		return this.myname;
		// 	}

		// }

		//****** CHILD class 

		utils.extends(Child, Parent);

		function Child(name){
			//Child.uber is a reference to Parent.prototype
			//Child.uber.constructor is a reference to the Parent function which is the constructor of Parent.prototype
			//we call the Parent construtor in the scope of Child
			//Q: why does this.uber return undefined?
			//this is an instance of Child 
			//uber is defined as a property of the Child function
			//so maybe this.constructor.uber (a reference to the Child function object itself) would work?
			//A: YES. this.constructor.uber.constructor.apply(this, [name]) works as well
			//Parent === Child.uber.constructor

			Child.uber.constructor.apply(this, [name]);
		}

		Child.prototype.sayHello = function(){
			//Because Parent is a function, we access its prototype through the prototype keyword. 
			//You dont need to do this with Parent instances. 
			//So Parent.protoype.sayHello or parentInstance.sayHello will work
			
			//Parent.prototype.sayHello.apply(this, [name]) is same as below
			return Child.uber.sayHello.call(this);
		}

		//****** GRANDCHILD class 

		utils.extends(GrandChild, Child);

		function GrandChild(name){
			GrandChild.uber.constructor.apply(this, [name]);
		}

		GrandChild.prototype.sayHello = function(){
			return GrandChild.uber.sayHello.call(this) + " as Grandchild ";
		}

		//***** DO STUFF

		var gchild = new Child("Leo");

		console.log(gchild.sayHello());

		
	}
);
