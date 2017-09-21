
(function(){
	'use restrict';


	angular.module('MenuApp')
	.component('items', {

		templateUrl: 'templates/itemList.template.html',
	   bindings:{
		 	myItemList: '<'
		 }
	})

})();