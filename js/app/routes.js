
angular.module('filmsiteApp')

	.config(['$routeProvider', '$locationProvider', 

		function ($routeProvider, $locationProvider) {
		
			$routeProvider
				.when('/home', {
					templateUrl: 'js/app/templates/home.html',
					controller: 'homeController'
				})
				.when('/behind-the-scenes', {
					templateUrl: 'js/app/templates/behind-the-scenes.html',
					controller: 'behindController'
				})
				.when('/synopsis', {
					templateUrl: 'js/app/templates/synopsis.html',
					controller: 'synopsisController'
				})
				.when('/crew', {
					templateUrl: 'js/app/templates/crew.html',
					controller: 'crewController'
				})
				.when('/vfx', {
					templateUrl: 'js/app/templates/vfx.html',
					controller: 'vfxController'
				})
				.otherwise({
					redirectTo: '/home'
				});
		}
	]);