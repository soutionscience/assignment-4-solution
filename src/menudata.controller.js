(function(){

	angular.module('data')
	.controller('menuDataCtrl', menuDataCtrl);

	menuDataCtrl.$inject =['$scope', 'MenuDataService']


	function menuDataCtrl($scope, MenuDataService){
		var menu = this;
		var promise
		var promise2
		var categoryname = "L"
		promise = MenuDataService.getAllCategories()
       promise.then(function(result){

       	$scope.data= result.data
       menu.categories = $scope.data;
       	console.log($scope.data[0].short_name)
       }).
       catch(function(error){
       	console.log("something went wrong")
       })



       
	}



})();