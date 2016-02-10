(function(){
	function movieFun($scope,ajaxfactory,$routeParams){
		$scope.data = null;
		$scope.selectedHeros = 0;
		$scope.selectedHeros = $routeParams.hid;	
		
		ajaxfactory.ajax
		.success(function(r,s,x){
			$scope.data = r;
			function listMovies(){				
				$scope.movies=$scope.data.heros[$scope.selectedHeros-1].movieslist;
			}
			listMovies();
		})
		.error(function(err,s,x){
			$log(err);
		});
	}
	angular.module("app").controller("movies",movieFun);
}());
