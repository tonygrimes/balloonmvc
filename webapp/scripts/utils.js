define(function(){
	
	var utils = {};


	//in this version changes to parentObj affect all subclasses and child also gets instance propertoe sof parent
	utils.create = function(parentObj){

		function F(){};
		F.prototype = parentObj;
		return new F();

	};

	//in this version you only inherit the prototype which should not contain instance properties
	utils.extends = function(C, P){

		function F(){};
		F.prototype = P.prototype;

		//why not this instead if we just want to have access to the prototype of P, and do away with F altogether?
		//C.prototype = P.prototype;
		//it is so that i cannot alter the prototype chain of P and thereby alter the inherited values of other objects

		C.prototype = new F();
		C.uber = P.prototype;
		C.prototype.constructor = C;

	};

	//var Child = Child.extends(Parent)

	utils.newClass = function(Parent, props){

		var Child = function(){
			if(Child.uber && Child.uber._init){
				Child.uber._init.apply(this, [name]);
			}
		}

		Parent = Parent || Object;

		function F(){};
		F.prototype = Parent.prototype;
		Child.prototype = new F();
		Child.uber = Parent.prototype;
		Child.prototype.constructor = Child;

		for(i in props){
			Child.prototype[i] = props[i];
		}

		return Child;

	}

	return utils;

})