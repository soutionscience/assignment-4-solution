(function(){


	angular.module('MenuApp')
	.component('categoriesComponent', {
		templateUrl: 'templates/categoriesList.template.html',
	   bindings:{
		 	categories: '<'
		 }
	})

})();