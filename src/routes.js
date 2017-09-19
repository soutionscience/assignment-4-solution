(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];


	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/')


		$stateProvider
		.state('/',{
			url: '/',
			controller: 'menuDataCtrl',
			templateUrl:'/templates/home.template.html'
		})
		.state('categories',{
			url:'/categories',
			controller: 'menuDataCtrl',
			templateUrl:'/templates/categories.template.html'
		})
		
        .state('items',{
			url: '/items/{categoryItem}',
			controller: 'menuDataCtrl',
			templateUrl:'/templates/items.template.html',
			// resolve:{
			// 	item:['$stateParams', 'MenuDataService', function(){
			// 		return MenuDataService.getItemsForCategory(categoryItem).then(function(categories){
			// 			console.log(categories[$stateParamscategoryItem])
			// 			return categories[$stateParams.short_name]

			// 		})

			// 	}]

			// }
		})





		;

	}
})();