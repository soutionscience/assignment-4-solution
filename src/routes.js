(function(){

	angular.module('MenuApp')
	.config(RoutesConfig);

	RoutesConfig.$inject =['$stateProvider', '$urlRouterProvider'];


	function RoutesConfig($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/')


		$stateProvider
		.state('home', {
                url: '/',
                templateUrl: '/templates/home.template.html'
            })
		.state('categories',{
			url:'/categories',
			controller: 'categoriesCtrl as mainList',
			templateUrl:'/templates/categories.template.html',
			resolve: {
				categories:['MenuDataService' , function(MenuDataService){
					return MenuDataService.getAllCategories().then(function(result){
						return result;
					})
				}]
			}
		})
		
               .state('items', {
                url: '/items/{shortname}',
                templateUrl: '/templates/items.template.html',
                controller: 'itemsCtrl as  itemList',
                  resolve: {
                    itemsList: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
                        var result =  MenuDataService.getItemsForCategory($stateParams.shortname);
                      

                        return result;
                    }],
                }
            });

	}
})();