(function(){

	angular.module('data')
	.controller('menuDataCtrl', menuDataCtrl);

	menuDataCtrl.$inject =['$scope', 'MenuDataService']


	function menuDataCtrl($scope, MenuDataService){
		var menu = this;
		var promise
		promise = MenuDataService.getAllCategories()
       promise.then(function(result){

       	$scope.data= result.data
       menu.categories = $scope.data;
       	console.log(menu.categories)
       }).
       catch(function(error){
       	console.log("something went wrong")
       })
	}



})();