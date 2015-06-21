angular.module('filmsiteApp')

.controller('behindController', ['$scope', '$rootScope', 'jsonService',

    function($scope, $rootScope, jsonService) {

        $scope.pageClass = 'page-gallery';
        $scope.gallery = {};
        $scope.imagesReady = false;

        // Dynamically generates images array
        $scope.getImagesArray = function() {

            jsonService.getData('js/app/json/gallery.json').then(function(d) {
                if (d !== undefined) {
                    
                    $scope.galleries = d;                    
                    $scope.gallery['current'] = $scope.galleries[0].name;
                    $scope.gallery['galleryImages'] = $scope.galleries[0].images;
                    $scope.imagesReady = true;
                }
            });
            
        }();

    }
])
