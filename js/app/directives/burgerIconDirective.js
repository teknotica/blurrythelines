angular.module('filmsiteApp')

.directive('burgerIcon', function($timeout, utilsService) {
    return {
        restrict: 'E',
        replace: 'true',
        template: '<div id="menu-icon" class="no-animate"><span class="bar top"></span><span class="bar middle"></span><span class="bar bottom"></span></div>',
        link: function(scope, element, attributes, controller) {

            element.bind('click', function() {

                $timeout(function() {
					utilsService.openCloseBurger();
                    utilsService.openCloseOverlay();
                }, 100);


            });

        }
    }
})
