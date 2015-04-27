
angular.module('filmsiteApp')
	
	.controller('galleryController', ['$scope', function ($scope) {
		
		$scope.pageClass = 'page-gallery';
		$scope.galleryImages = [];
		$scope.imagesReady = false;

		// Dynamically generates images array
		$scope.getImagesArray = function() {
			
			var galleryLength = 4;			
			for (var i = 1; i <= galleryLength; i++) {
				$scope.galleryImages.push('gallery-' + i + '.jpg');
			};
			$scope.imagesReady = true;
		}();
		
	}])