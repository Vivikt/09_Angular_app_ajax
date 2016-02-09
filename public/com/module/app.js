(function(){
	angular.module("app",["ngRoute"])
//	.config(function($routeProvider,constantrecipe, $provide){
	.config(function($routeProvider,constantrecipe){
		
		/*$provide.provider("hero",function(){
			this.$get = function () {
				var appTitle = "Synechron Hero Application";
				return {
					apt : appTitle
				};
			};
		});*/
		
		alert(constantrecipe.message);
		$routeProvider
		.when("/",{
			controller : "herocontroller",
			templateUrl : "com/myapp/views/heros.html"
		})
		.when("/movies/:hid?",{
			controller : "moviescontroller",
			templateUrl : "com/myapp/views/movies.html"
		});	
	});
}());
