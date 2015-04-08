
angular.module('filmsiteApp')
	
	.controller('galleryController', ['$scope', function ($scope) {
		
		$scope.pageClass = 'page-gallery';
		$scope.images = ["gallery-1.jpg", "gallery-2.jpg", "gallery-3.jpg"];
		
	}])