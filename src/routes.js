(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];


	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/')


		$stateProvider
		.state('/',{
			url: '/',
			controller: 'menuDataCtrl as mainlist',
			templateUrl:'/templates/home.template.html'
		})
		.state('categories',{
			url:'/categories',
			controller: 'menuDataCtrl as mainlist',
			templateUrl:'/templates/categories.template.html',
			resolve: {
				categories:['MenuDataService' , function(MenuDataService){
					return MenuDataService.getAllCategories().then(function(result){
						return result;
					})
				}]
			}
		})
		
        .state('items',{
			url: '/items/{categoryItem}',
			controller: 'menuDataCtrl',
			templateUrl:'/templates/items.template.html'
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