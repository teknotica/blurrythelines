
angular.module('filmsiteApp')

	.config(['$routeProvider', '$locationProvider', 

		function ($routeProvider, $locationProvider) {
		
			$routeProvider
				.when('/intro', {
					templateUrl: 'js/app/templates/intro.html',
					controller: 'introController'
				})
				.when('/gallery', {
					templateUrl: 'js/app/templates/gallery.html',
					controller: 'galleryController'
				})
				.when('/synopsis', {
					templateUrl: 'js/app/templates/synopsis.html',
					controller: 'synopsisController'
				})
				.when('/vfx', {
					templateUrl: 'js/app/templates/vfx.html',
					controller: 'vfxController'
				})
				.otherwise({
					redirectTo: '/intro'
				});
		}
	]);