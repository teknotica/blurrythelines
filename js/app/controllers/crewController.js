angular.module('filmsiteApp')
.controller('crewController', function($scope, jsonService) {
    
    $scope.pageClass = 'page-crew';

    $scope.getCrew = function() {
    	jsonService.getData('js/app/json/crew.json').then(function(d) {
    		if (d !== undefined) {
    			$scope.crew = d;
    		}
    	});
    }();

    $scope.loadBio = function(c) {
    	console.log(c);
    };


})