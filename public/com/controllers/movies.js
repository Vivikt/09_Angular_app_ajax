(function(){
	function movieFun($scope,ajaxfactory,$routeParams,$http){
		$scope.data,
		$scope.movies,
		$scope.sl,
		$scope.mt,
		$scope.mp = null;
		$scope.selectedHeros = 0;
		$scope.selectedHeros = $routeParams.hid;	
		
		$scope.addMovie = function(){
			
			var movieData = {
				sl : $scope.movies.length+1,
				title: $scope.mt,
				poster: $scope.mp
			};
			$http.put("/movies/"+$scope.selectedHeros,movieData)
			.success(function(r,s,x){
				console.log(r);
				$scope.data = r;			
				listMovies();
			}).error(function(e,s,x){
				console.log(e);
			});
			
		};
		ajaxfactory.ajax
		.success(function(r,s,x){
			$scope.data = r;			
			listMovies();
		})
		.error(function(err,s,x){
			$log(err);
		});
		function listMovies(){				
			$scope.movies=$scope.data.heros[$scope.selectedHeros-1].movieslist;
		}
	}
	angular.module("app").controller("movies",movieFun);
}());
