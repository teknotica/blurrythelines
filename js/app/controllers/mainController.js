angular.module('filmsiteApp').
controller('mainController', function($scope, jsonService, utilsService) {

	// Get menu items from JSON
	$scope.getMenu = function() {
		jsonService.getData('js/app/json/menu.json').then(function(d) {
			if (d !== undefined) {
				$scope.menuItems = d;
			}
		});
	}();	

	// Check navigation overlay status
	$scope.checkOverlay = function() {
		utilsService.openCloseBurger();
		utilsService.openCloseOverlay();
	};

})
