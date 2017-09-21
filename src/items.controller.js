(function(){
	'use restrict';

	angular.module('MenuApp')
	.controller('itemsCtrl', itemsCtrl);

	itemsCtrl.$inject =['$scope','itemsList']

	function itemsCtrl($scope, itemsList){

		 var itemList = this;
        itemList.items = itemsList.menu_items;
        $scope.dataset = itemList.items
        itemsList.categoryName = itemsList.category.name;
        console.log(itemList.items)
	}

})();