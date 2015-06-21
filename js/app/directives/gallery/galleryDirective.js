
angular.module('filmsiteApp')

	.directive('gallery', function ($rootScope) {

		return {
			restrict : "E",
			scope: {
				data: "="
			},
			templateUrl: "js/app/directives/gallery/gallery.html", 
			link : function (scope, element, attrs) {

				$rootScope.zoomActive = false;
				scope.zoomActive = false;

				scope.zoom = function(img) {
					scope.imgZoom = img;
					scope.zoomActive = true;
					$rootScope.zoomActive = true;
				};

				scope.close = function() {
					scope.imgZoom = '';
					$rootScope.zoomActive = false;
					scope.zoomActive = false;
				};
			}
		}
	})