
angular.module('filmsiteApp')

	.directive('twentytwenty', function($timeout) {
		return {
			restrict: 'A', 
			link: function($scope, iElm, iAttrs, controller) {

				$timeout(function() {
		            $(iElm).twentytwenty({
					    default_offset_pct: 0.5, 
					    orientation: 'horizontal'
					});  
		        }, 300);
			}
		};
	});