(function(){

	angular.module('data')
	.controller('menuDataCtrl', menuDataCtrl);

	menuDataCtrl.$inject =['$scope', 'MenuDataService','categories']


	function menuDataCtrl($scope, MenuDataService, categories){
		var menu = this;
	    menu.categories = categories.data;

	    //$scope.data = menu.categories;

	    //console.log(menu.categories)


       
	}



})();