angular.module('filmsiteApp')
.service('utilsService', ['$http', function($http) {

    return {
        
        hasClass: function(element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        },

        openCloseBurger: function() {

        	var burger = document.getElementById('menu-icon');

        	if (this.hasClass(burger, 'no-animate')) {
        		burger.className = '';
        		burger.className = 'closed';
        	}

        	if (!this.hasClass(burger, 'open')) {
        		burger.className = 'animate open';
        	} else {
        		burger.className = '';
        		burger.className = 'animate closed';
        	}
        },

        openCloseOverlay: function() {

        	var navOverlay = document.getElementById('nav-overlay');

        	if (!this.hasClass(navOverlay, 'open')) {
        		navOverlay.className = 'open';
        	} else {
        		navOverlay.className = '';
        		navOverlay.className = 'closed';
        	}

        }
    }

}])
