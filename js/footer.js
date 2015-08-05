define([], function(){

	return {
		init: function(){
			console.log("In footer view init called");
		},

		beforeActivate: function(){
			console.log("In footer view beforeActivate called");
		},

		afterActivate: function(){
			console.log("In footer view afterActivate called");
		},

		beforeDeactivate: function(){
			console.log("In footer view beforeDeactivate called");
		},

		afterDeactivate: function(){
			console.log("In footer view afterDeactivate called");
		}
	}
});
