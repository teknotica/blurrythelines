angular.module('filmsiteApp')
    .service('jsonService', ['$http', '$q', function($http, $q) {

        return {

            getData: function(url) {

                var deferred = $q.defer();
                $http.get(url).success(function(d) {
                    deferred.resolve(d);
                });
                return deferred.promise;
            }
        }

    }])
