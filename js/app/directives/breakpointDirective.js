
angular.module('filmsiteApp')

	.directive('breakpoint', ['CONST', function(CONST) {
		
		return {
			restrict: 'AE',
			link: function(scope, element, attributes, controller) {

				var tablet = CONST.tablet,
					mobile = CONST.mobile;

				// Get viewport size	
				getViewport = function(currentSize) {

					if (currentSize > tablet) {
						return 'desktop';
					} else if ((currentSize > mobile) && (currentSize <= tablet)) {
						return 'tablet';
					} else if (currentSize <= mobile) {
						return 'mobile';
					}

				};

				// Initial load
				scope.$root.breakpoint = getViewport(window.innerWidth);

				// On window resize
				window.onresize = function(e) {
					
					scope.$apply(function() {
						scope.$root.breakpoint = getViewport(window.innerWidth);						
					});

				}

			}
		};
	}]);