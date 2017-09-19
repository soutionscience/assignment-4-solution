(function(){


	angular.module('data')
	.component('categories', {
		templateUrl: 'templates/categoriesList.template.html',
		controller: 'menuDataCtrl',
		biddings:{
			categories: '<'
		}
	})

})();