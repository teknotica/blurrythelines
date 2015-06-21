angular.module('filmsiteApp')
    .directive('parallex', function() {
        return {
            restrict: "A",
            link: function(scope, element, attrs) {

                var $window = angular.element(window);
                var ammount = 0.01;

                $window.bind('mousemove', function(e) {

                    var xpos = e.pageX,
                        width = e.view.outerWidth,
                        xmid = width / 2;

                    var xval;

                    if (xpos < xmid) {
                        xval = "-" + (xmid - xpos);
                    } else {
                        xval = xpos - xmid;
                    }

                    var left = (Math.round(xval * ammount)) + "px";
                    element[0].style.backgroundPositionX = left;

                });
            }
        }
    })
