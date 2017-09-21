(function(){
	angular.module('data')
	.service('MenuDataService', MenuDataService);

	MenuDataService.$inject =['$http'];


	function MenuDataService ( $http){
		var service = this;


        service.getAllCategories = function(){
		     var response = $http({
			method:"Get",
			url: ("https://davids-restaurant.herokuapp.com/categories.json")
		       });
       // console.log(response)
       console.log("test")
		return response;
	},

	     service.getItemsForCategory= function(categoriesShortName){
	     	return $http({
	     		method: "Get",
	     		url:("https://davids-restaurant.herokuapp.com/menu_items.json"),
	     		params:{
	     			category: categoriesShortName
	     		}
	     	})
	     	.then(function(result){
	     		return result.data;
	     	});
		
	}

	}
})();