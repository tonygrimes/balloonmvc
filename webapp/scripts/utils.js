define(function(){
	
	var utils = {};

	utils.create = function(parentObj){

		function F(){};
		F.prototype = parentObj;
		var obj=new F();
		return obj;

	};

	return utils;

})