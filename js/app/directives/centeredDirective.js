angular.module('filmsiteApp')
.directive('centered', function($timeout, utilsService) {
    return {
        restrict: 'A',
        link: function(scope, element, attributes, controller) {

            function centerBox(element) {

                var eWidth = element[0].clientWidth;
                element[0].style.marginLeft = ((eWidth / 2) * -1) + "px";
            }

            $timeout(function() {

                centerBox(element);

                window.onresize = function(e) {
                    centerBox(element);
                };

            }, 200);

        }
    }
})
