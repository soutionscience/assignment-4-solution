(function(){

	angular.module('MenuApp')
	.controller('categoriesCtrl', categoriesCtrl);

	categoriesCtrl.$inject =['$scope', 'MenuDataService','categories']


	function categoriesCtrl($scope, MenuDataService, categories){
		var mainlist = this;
	    mainlist.categories = categories.data;

	    //$scope.data = menu.categories;

	    //console.log(menu.categories)


       
	}



})();