define([], function(){

	return {
		init: function(){
			console.log("In header view init called");
		},

		beforeActivate: function(){
			console.log("In header view beforeActivate called");
		},

		afterActivate: function(){
			console.log("In header view afterActivate called");
		},

		beforeDeactivate: function(){
			console.log("In header view beforeDeactivate called");
		},

		afterDeactivate: function(){
			console.log("In header view afterDeactivate called");
		}
	}
});
