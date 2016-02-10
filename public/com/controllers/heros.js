(function(){
	function heroFun($scope,ajaxfactory,$http){
		$scope.data ,
		$scope.ht ,
		$scope.hp ,
		$scope.hc ,
		$scope.hpo = null;
		$scope.addHero = function(){
			var postdata = {
				id: $scope.data.length+1,
		        movies: 0,
		        title: $scope.ht,
		        city: $scope.hc,
		        power: $scope.hpo,
		        photo: $scope.hp,
		        movieslist: []
			};
			console.log(postdata);
			$http.post("/heros",postdata).success(function(r,s,x){
				console.log("data posted");
				$scope.data = r.heros;
			});
		};
		ajaxfactory.ajax
		.success(function(r,s,x){
			console.log("--------------------");
			$scope.data = r.heros;
		})
		.error(function(err,s,x){
			console.log(err);
		});
	}
	angular.module("app").controller("heros",heroFun);
}());
