
angular.module('filmsiteApp')

	.directive('animateZoomImage', function($timeout, $rootScope) {
		
		return {
			restrict: 'A',
			link: function(scope, element, attributes, controller) {
				
				// element.bind('click', function() {

				// 	$timeout(function() {						
				// 		var zoomImage = document.getElementById('zoomImage');
				// 		zoomImage.className = 'animate-zoomed';
				// 	}, 200);
					
				// 	//element[0].clientWidth
				// 	//element[0].clientHeight
				// });
			}
		}
	})