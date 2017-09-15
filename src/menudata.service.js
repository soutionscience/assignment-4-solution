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

	     service.getItemsForCategory= function(categoryShortName){
	     	var response = $http({
	     		method: "Get",
	     		url:("https://davids-restaurant.herokuapp.com/categories.json"),
	     		params:{
	     			category: shortName
	     		}
	     	});
		
	}

	}
})();