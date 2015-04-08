
angular.module('filmsiteApp')

	.directive('gallery',function () {

		return {
			restrict : "E",
			scope: {
				data: "="
			},
			templateUrl: "js/app/directives/gallery/gallery.html", 
			link : function (scope, element, attrs) {

				scope.zoomActive = false;

				scope.zoom = function(img) {
					scope.imgZoom = img;
					scope.zoomActive = true;
				};

				scope.close = function() {
					scope.imgZoom = '';
					scope.zoomActive = false;
				};
			}
		}
	})